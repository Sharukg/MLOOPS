# 🪟 Glass Identification Prediction System

### 📌 **Overview**
This project is a **machine learning-based web application** designed to classify glass types based on their chemical compositions. It consists of:
- A **Django backend** that processes data, trains the machine learning model, and serves predictions.
- A **React frontend** providing an intuitive user interface for uploading glass data and viewing predictions.
- **Dockerized environment** for easy deployment and scalability.

---

### 🎯 **Features**
- **Backend (Django):**
  - RESTful APIs for data interaction.
  - SQLite database for development (easily replaceable with other DBs for production).
  - Handles backend logic for the app.
  
- **Frontend (React):**
  - User-friendly interface with dynamic components.
  - Built using modern React best practices.

- **Docker Integration:**
  - Fully containerized environment for both backend and frontend.
  - Easy deployment and consistent environments.

---

### 🖼️ **Project Structure**

#### **Root Directory**
| **File/Folder**       | **Purpose**                                                                |
|------------------------|----------------------------------------------------------------------------|
| `.vscode/`             | Configuration for Visual Studio Code.                                     |
| `backend/`             | Contains the Django backend logic.                                        |
| `my-react-app/`        | Contains the React frontend.                                              |
| `env/`                 | Virtual environment for Python backend dependencies.                     |
| `dockerfile`           | Configuration for containerizing the app.                                |
| `glass.csv`            | CSV file for testing or data input (used in backend).                    |
| `package.json`         | Defines dependencies and scripts for the Node.js application.            |

#### **Backend**
| **File/Folder**        | **Purpose**                                                               |
|------------------------|----------------------------------------------------------------------------|
| `app/`                 | Core Django app for business logic and APIs.                             |
| `backend/`             | Project-level settings, URLs, and configurations.                        |
| `db.sqlite3`           | SQLite database for storing backend data.                                |
| `manage.py`            | Django project management script.                                        |

#### **Frontend**
| **File/Folder**        | **Purpose**                                                               |
|------------------------|----------------------------------------------------------------------------|
| `src/`                 | Contains React components, hooks, and pages.                             |
| `public/`              | Static files and assets for the React app.                               |
| `node_modules/`        | Installed dependencies for the React project.                            |

---

### 🛠️ **Setup Instructions**

#### Clone the Repository
```bash
git clone https://github.com/your-username/MLOOPS.git
cd MLOOPS
