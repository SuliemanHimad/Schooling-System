<template>
  <div>
    <h2>Create Student</h2>
    <form @submit.prevent="createStudent">
      <input
        v-model="student.sn"
        type="text"
        placeholder="Student SN"
        required
      />
      <input
        v-model="student.full_name"
        type="text"
        placeholder="Full Name"
        required
      />
      <input v-model="student.grade" type="text" placeholder="Grade" required />
      <input
        v-model="student.subjects"
        type="text"
        placeholder="Subjects"
        required
      />
      <input
        v-model="student.address"
        type="text"
        placeholder="Address"
        required
      />
      <button type="submit">Create</button>
    </form>
    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      student: {
        sn: "",
        full_name: "",
        grade: "",
        subjects: "",
        address: "",
      },
      message: "",
    };
  },
  methods: {
    async createStudent() {
      try {
        const response = await axios.post(
          "http://127.0.0.1:8004/api/method/school.school.doctype.students.api.create_student",
          this.student,
          {
            headers: {
              Authorization: "token c0ffbab7720767b:2e2eeafbb9f149c",
            },
          }
        );
        this.message = response.data.message;
        // redirect to getAllStudent page
        this.$router.push("/");
      } catch (error) {
        console.error(error);
        this.message = "Error creating student.";
      }
    },
  },
};
</script>

<style scoped>
div {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

form {
  display: flex;
  flex-direction: column;
}

input {
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 10px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #218838;
}

p {
  text-align: center;
  color: green;
  margin-top: 10px;
}
</style>
