import coursesData from "./courses.json";
import modulesData from "./modules.json";
import assignmentsData from "./assignments.json";

const courses = coursesData.map(course => ({
  _id: course._id,
  name: course.name,
  number: course.number,
  startDate: course.startDate,
  endDate: course.endDate,
}));

const modules = modulesData.map(module => ({
  _id: module._id,
  name: module.name,
  description: module.description,
  course: module.course,
}));

const assignments = assignmentsData.map(assignment => ({
  _id: assignment._id,
  title: assignment.title,
  course: assignment.course,
}));

const exportedData = {
  courses,
  modules,
  assignments
};

export default exportedData;

