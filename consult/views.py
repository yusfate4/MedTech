from django.shortcuts import get_object_or_404, render
from django.http import Http404
from django.db.models import F
from django.urls import reverse

from django.http import HttpResponse, HttpResponseRedirect
from django.template import loader

from .models import Choice, Question


# Create your views here.
def index(request):
    return HttpResponse("Hello Dear, You're at the Tell-A-Doc page. Your express ticket to a live interaction with a qualified medical doctor within your locale. Skip the long queues at the hospitals and get medical services delivered to you at home")

def detail(request, question_id):
    return HttpResponse("You're looking at medical enquiry question number %s." % question_id)


def results(request, question_id):
    response = "This is the response to the medical enquiry question number %s."
    return HttpResponse(response % question_id)


def vote(request, question_id):
    return HttpResponse("You're responding to medical enquiry question number %s." % question_id)


# def index(request):
#     latest_question_list = Question.objects.order_by("-pub_date")[:5]
#     output = ", ".join([q.question_text for q in latest_question_list])
#     return HttpResponse(output)

def index(request):
    latest_question_list = Question.objects.order_by("-pub_date")[:5]
    template = loader.get_template("consult/index.html")
    context = {
        "latest_question_list": latest_question_list,
    }
    return HttpResponse(template.render(context, request))


# Django provides a shortcut to load a template, simply fill a context and return an HttpResponse object with the result of the rendered template as follows (this eliminates the need to import HttpResponse and loader):

# def index(request):
#     latest_question_list = Question.objects.order_by("-pub_date")[:5]
#     context = {"latest_question_list": latest_question_list}
#     return render(request, "consult/index.html", context)


def detail(request, question_id):
    try:
        question = Question.objects.get(pk=question_id)
    except Question.DoesNotExist:
        raise Http404("Question does not exist")
    return render(request, "consult/detail.html", {"question": question})


# def detail(request, question_id):
#     question = get_object_or_404(Question, pk=question_id)
#     return render(request, "polls/detail.html", {"question": question})


def vote(request, question_id):
    question = get_object_or_404(Question, pk=question_id)
    try:
        selected_choice = question.choice_set.get(pk=request.POST["choice"])
    except (KeyError, Choice.DoesNotExist):
        # Redisplay the question voting form.
        return render(
            request,
            "consult/detail.html",
            {
                "question": question,
                "error_message": "You didn't select a choice.",
            },
        )
    else:
        selected_choice.votes = F("votes") + 1
        selected_choice.save()
        # Always return an HttpResponseRedirect after successfully dealing
        # with POST data. This prevents data from being posted twice if a
        # user hits the Back button.
        return HttpResponseRedirect(reverse("consult:results", args=(question.id,)))
    

def results(request, question_id):
    question = get_object_or_404(Question, pk=question_id)
    return render(request, "consult/results.html", {"question": question})