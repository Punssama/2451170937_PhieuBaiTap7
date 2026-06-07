const students = [
  { name: "An", math: 8, physics: 7, cs: 9, gender: "M" },
  { name: "Bình", math: 6, physics: 9, cs: 7, gender: "F" },
  { name: "Chi", math: 9, physics: 6, cs: 8, gender: "F" },
  { name: "Dũng", math: 5, physics: 5, cs: 6, gender: "M" },
  { name: "Em", math: 10, physics: 8, cs: 9, gender: "F" },
  { name: "Phong", math: 3, physics: 4, cs: 5, gender: "M" },
  { name: "Giang", math: 7, physics: 7, cs: 7, gender: "F" },
  { name: "Huy", math: 4, physics: 6, cs: 3, gender: "M" },
];

function formatAverage(student) {
  return student.math * 0.4 + student.physics * 0.3 + student.cs * 0.3;
}

function classify(avg) {
  if (avg >= 8.0) return "Giỏi";
  if (avg >= 6.5) return "Khá";
  if (avg >= 5.0) return "Trung bình";
  return "Yếu";
}

function pad(value, width) {
  return String(value).padEnd(width, " ");
}

const results = [];
const classCount = {
  Giỏi: 0,
  Khá: 0,
  "Trung bình": 0,
  Yếu: 0,
};

let sumAvg = 0;
let sumMath = 0;
let sumPhysics = 0;
let sumCs = 0;

let topStudent = null;
let bottomStudent = null;

const genderStats = {
  M: { total: 0, count: 0 },
  F: { total: 0, count: 0 },
};

for (let i = 0; i < students.length; i++) {
  const student = students[i];
  const avg = formatAverage(student);
  const rank = classify(avg);

  results.push({
    stt: i + 1,
    name: student.name,
    avg: avg,
    rank: rank,
  });

  classCount[rank]++;
  sumAvg += avg;
  sumMath += student.math;
  sumPhysics += student.physics;
  sumCs += student.cs;

  if (topStudent === null || avg > topStudent.avg) {
    topStudent = { name: student.name, avg: avg };
  }

  if (bottomStudent === null || avg < bottomStudent.avg) {
    bottomStudent = { name: student.name, avg: avg };
  }

  if (student.gender === "M" || student.gender === "F") {
    genderStats[student.gender].total += avg;
    genderStats[student.gender].count += 1;
  }
}

console.log("| STT | Tên    | TB   | Xếp loại    |");
console.log("|-----|--------|------|-------------|");
for (let i = 0; i < results.length; i++) {
  const row = results[i];
  console.log(
    `| ${pad(row.stt, 3)} | ${pad(row.name, 6)} | ${pad(row.avg.toFixed(1), 4)} | ${pad(row.rank, 11)} |`,
  );
}

console.log("\nĐếm số sinh viên theo xếp loại:");
console.log(classCount);

console.log("\nSinh viên có điểm trung bình cao nhất:");
console.log(`${topStudent.name} - ${topStudent.avg.toFixed(1)}`);

console.log("\nSinh viên có điểm trung bình thấp nhất:");
console.log(`${bottomStudent.name} - ${bottomStudent.avg.toFixed(1)}`);

console.log("\nĐiểm trung bình toàn lớp theo từng môn:");
console.log(`Math: ${(sumMath / students.length).toFixed(2)}`);
console.log(`Physics: ${(sumPhysics / students.length).toFixed(2)}`);
console.log(`CS: ${(sumCs / students.length).toFixed(2)}`);

console.log("\nBonus - Điểm trung bình theo giới tính:");
console.log(`Nam: ${(genderStats.M.total / genderStats.M.count).toFixed(2)}`);
console.log(`Nữ: ${(genderStats.F.total / genderStats.F.count).toFixed(2)}`);
