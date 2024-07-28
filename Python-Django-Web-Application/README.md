# Deploying Python Web Application on EC2

### This Markdown file outlines the steps you need to follow to deploy your Python web application on an EC2 instance, with commands clearly highlighted for easy reference.

## Step-by-Step Instructions

1. **Update the Package List**
   ```sh
   sudo apt update
   ```
2. **Install Python 3 and Pip**

    ```sh
    sudo apt install python3 python3-pip
    ```

3. **Install Python Virtual Environment Package**

    ```sh
    sudo apt install python3-venv
    ```
4. **Create a Virtual Environment**

    ```sh
    python3 -m venv venv
    ```
5. **Activate the Virtual Environment**

    ```sh
    source /venv/bin/activate
    ```


6. **Apply Migrations**

    ```sh
    python manage.py migrate
    ```
    
7. **Run the Django Development Server**

    ```sh
        python3 manage.py runserver 0.0.0.0:8000
    ```
Notes

    Ensure that your EC2 instance’s security group allows inbound traffic on port 8000.
    For production environments, consider using a more robust server like Gunicorn and a web server like Nginx.

