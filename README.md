# Task Management Application

## Project Overview
The **Task Management Application** is a React-based project designed to help users organize, manage, and track their tasks efficiently. It includes features for adding, editing, and deleting tasks, with a sleek and responsive user interface for optimal usability across various devices.

## Features
1. **Add Tasks**
   - Users can add tasks with a title, description, and due date.

2. **Edit Tasks**
   - Tasks can be updated using a modal popup for better user experience.

3. **Delete Tasks**
   - Unwanted tasks can be removed instantly.

4. **Responsive Design**
   - The application is fully responsive, ensuring usability on desktops, tablets, and mobile devices.


## Project Structure

/src
  |-- components
      |-- AddTask.js
      |-- TaskList.js
      |-- EditTaskModal.js
  |-- styles
      |-- AddTask.css
      |-- TaskList.css
      |-- EditTaskModal.css
  |-- images
      |-- bg.jpg
  |-- App.js


## Technologies Used
- **Frontend**: React.js
- **Styling**: CSS3
- **Icons**: react-icons

## Installation and Setup
1. Clone the repository:
   
   git clone <repository-url>
   

2. Navigate to the project directory:
   
   cd task-management-app
   

3. Install dependencies:
   
   npm install
   

4. Start the development server:
   
   npm start
   

5. Open the application in your browser at `http://localhost:3000`.

## File Details
### 1. AddTask
- **File**: `src/components/AddTask.js`
- **Description**: Provides a form to add new tasks with fields for title, description, and due date.
- **Props**:
  - `addTask`: A function to add a new task to the list.
- **State**:
  - `title`, `description`, `dueDate`: Local states to manage form inputs.

### 2. EditTaskModal
- **File**: `src/components/EditTaskModal.js`
- **Description**: Displays a modal to edit the details of an existing task.
- **Props**:
  - `isOpen`: A boolean to control the modal visibility.
  - `task`: The task object to be edited.
  - `onSave`: A function to save the updated task.
  - `onClose`: A function to close the modal without saving.
- **State**:
  - `updatedTask`: Local state to manage the updated task data.

### 3. TaskList
- **File**: `src/components/TaskList.js`
- **Description**: Displays a list of tasks with options to edit or delete.
- **Props**:
  - `tasks`: An array of task objects to be displayed.
  - `onEdit`: A function to handle the edit action.
  - `onDelete`: A function to handle the delete action.

## Responsive Design
- Includes media queries for:
  - **Tablets**: Adjustments for screen widths below 768px.
  - **Mobile Devices**: Optimized layouts for screen widths below 480px.
- Input fields, buttons, and modals adapt seamlessly to different screen sizes.

## Dependencies
- React
- React Icons

## Future Enhancements
- Add task categorization (e.g., work, personal).
- Implement task prioritization.
- Add a feature to mark tasks as completed.

## License
This project is licensed under the MIT License.



