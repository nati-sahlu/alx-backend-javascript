export default function createIteratorObject(report) {
  return (function* iterator() {
    const allDepts = Object.values(report.allEmployees);
    for (const employees of allDepts) {
      for (const employee of employees) {
        yield employee;
      }
    }
  }());
}
