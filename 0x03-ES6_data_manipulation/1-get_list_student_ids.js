export default function getListStudentIds(arr) {
  let nArr = [];
  if (arr instanceof Array) {
    nArr = arr.map((item) => item.id);
  }

  return nArr;
}
