<template>
  <div>
    <h2>Update Student</h2>
    <form @submit.prevent="updateStudent">
      <div>
        <label for="name">Name:</label>
        <input id="name" v-model="student.name" type="text" disabled />
      </div>
      <div>
        <label for="full_name">Full Name:</label>
        <input id="full_name" v-model="student.full_name" type="text" />
      </div>
      <div>
        <label for="sn">SN:</label>
        <input id="sn" v-model="student.sn" type="text" />
      </div>
      <div>
        <label for="grade">Grade:</label>
        <input id="grade" v-model="student.grade" type="text" />
      </div>
      <div>
        <label for="subjects">Subjects:</label>
        <input id="subjects" v-model="student.subjects" type="text" />
      </div>
      <div>
        <label for="address">Address:</label>
        <input id="address" v-model="student.address" type="text" />
      </div>
      <button type="submit">Update</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      student: {
        name: "",
        full_name: "",
        sn: "",
        grade: "",
        subjects: "",
        address: "",
      },
    };
  },
  mounted() {
    this.fetchStudentData();
  },
  methods: {
    async fetchStudentData() {
      try {
        const studentId = this.$route.params.studentId;
        const response = await axios.get(
          `http://127.0.0.1:8004/api/method/school.school.doctype.students.api.get_student`,
          {
            params: { student_id: studentId },
            headers: {
              Authorization: "token c0ffbab7720767b:2e2eeafbb9f149c",
            },
          }
        );
        this.student = response.data.message;
      } catch (error) {
        console.error("Error fetching student data:", error);
      }
    },
    async updateStudent() {
      try {
        // Assuming `this.$route.params.studentId` is where the student_id is available
        const studentId = this.$route.params.studentId;

        // Add studentId to the student object before sending it in the request
        const updatedStudent = { ...this.student, student_id: studentId };

        const response = await axios.put(
          `http://127.0.0.1:8004/api/method/school.school.doctype.students.api.update_student`,
          updatedStudent,
          {
            headers: {
              Authorization: "token c0ffbab7720767b:2e2eeafbb9f149c",
            },
          }
        );
        console.log("Update response:", response.data); // Log the response
        alert("Student updated successfully!");
        this.$router.push("/");
      } catch (error) {
        console.error("Error updating student:", error);
        alert("Failed to update student.");
      }
    },
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
  margin-bottom: 20px;
}
form {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
form div {
  margin-bottom: 15px;
}
label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}
input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
button {
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #218838;
}
</style>
