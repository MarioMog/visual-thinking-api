# Code Challenge Visual Thinking API
| Hora de Inicio | Hora de Finalización | Duración | 
| -------------- | -------------------- | -------- |
|      23:54     |         1:21         |   1:27   |

## Dependencias
- Generales
  - Express: Esta dependecia se utiliza para crear a api que nos retornará los valores que deseemos.
  
- Desarrollo:
  - Eslint: Con esta dependecia se corre un script que nos ayuda a detectar si los archivos desarrollados cumplen con el estandar o con la guia de diseño que   deseamos implementar en nuestro proyecto.
  - Jest: Podemos correr todas las pruebas unitarias que hayamos creado; en caso de fallar, nos muestra la suite que fallo y nos indica el test que tronó.

## Componentes
- Clases
```mermaid        
classDiagram
    class StudentService
    StudentService : +getAllStudents(students)
    StudentService : +filterStudentsByCertification(students)
    StudentService : +filterByCreditsOver500(students)
```
```mermaid        
classDiagram
    class StudentController
    StudentController : +getAllStudents()
    StudentController : +getStudentsHaveCertification()
    StudentController : +getStudentsHaveCreditsOver500()
```
- Logica
```mermaid
graph TD;
    Reader-->StudentService;
    StudentService-->StudentController
    StudentController-->Server
```

## Guia de uso

| Endpoint | Request | Response |
|---|---|---|
| `localhost:3000/v1/students` | `localhost:3000/v1/students` | Retorna la lista de todos los estudiantes |
| `localhost:3000/v1/students/certificateds` | `localhost:3000/v1/students/certificateds` | Retorna los estudiantes certificados |
| `localhost:3000/v1/students/creditsover500` | `localhost:3000/v1/students/creditsover500` | Retorna los estudiantes con mas de 500 creditos |
