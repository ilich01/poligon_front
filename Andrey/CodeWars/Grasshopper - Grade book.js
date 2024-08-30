function getGrade (s1, s2, s3) {
	let average = (s1+s2+s3)/3
	let grade;

	if (average >= 90 && average <= 100) grade = 'A';
	if (average >= 80 && average < 90) grade = 'B';
	if (average >= 70 && average < 80) grade = 'C';
	if (average >= 60 && average < 70) grade = 'D';
	if (average >= 0 && average < 60) grade = 'F';

	return grade
}