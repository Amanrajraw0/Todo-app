# Base image
FROM python:3.11-slim

# Set working directory
WORKDIR /app

# Copy project files to container
COPY . .

# Install dependencies
RUN pip install flask

# Expose port
EXPOSE 5000

# Command to run the app
CMD ["python", "app.py"]
