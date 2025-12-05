export function getProgress() {
  return JSON.parse(localStorage.getItem("cours_progress") || "{}");
}

export function setProgress(progress) {
  localStorage.setItem("cours_progress", JSON.stringify(progress));
}

export function completeCourse(id) {
  const progress = getProgress();
  progress[id] = true;
  setProgress(progress);
}

export function isCourseCompleted(id) {
  return getProgress()[id] === true;
}
