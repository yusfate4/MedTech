OVERVIEW:
    This is built as part of the backend of the MEDTECH App called Tell-A-Doc.

### Backend Installation
1. **Clone the Repository**
   ```bash
   git clone https://github.com/yusfate4/MedTech.git
   cd Backend

2. **Set Up a Virtual Environment**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate

3. **Install Dependencies**
   ```bash
   pip install -r requirements.txt

4. **Run Migrations**
   ```bash
   python manage.py migrate

5. **Run the Application**
   ```bash
   python manage.py runserver

6. **Open your web browser and navigate to http://127.0.0.1:8000/ to use the application.**
   

### Frontend Installation
1. **Change directory**
   ```bash
   cd src

2. **Install Dependencies**
   ```bash
   npm install

3. **Run the Application**
   ```bash
   npm run dev

4. **Open your web browser and navigate to http://localhost:5173/ to use the application.**