<template>
  <div>
    <b-card no-body class="bg-default shadow">
      <b-card-header class="bg-transparent border-0">
        <h3 class="mb-0 text-white">List</h3>
      </b-card-header>
      <el-table
        class="table-responsive table table-dark"
        header-row-class-name="thead-dark"
        :data="users"
      >
        <el-table-column label="Image" min-width="310px">
          <b-media no-body class="align-items-center">
            <b-img
              class="avatar"
              rounded="circle"
              alt="Image placeholder"
              src="https://achatrust.dev.radixweb.net/public/achatrust/images/default.png"
            />
          </b-media>
        </el-table-column>
        <el-table-column label="First Name" min-width="310px" prop="name">
          <template v-slot="{ row }">
            <b-media no-body class="align-items-center">
              <b-media-body>
                <span class="font-weight-600 name mb-0 text-sm">{{
                  row.firstName
                }}</span>
              </b-media-body>
            </b-media>
          </template>
        </el-table-column>
        <el-table-column label="Last Name" prop="budget" min-width="140px">
          <template v-slot="{ row }">
            <b-media no-body class="align-items-center">
              <b-media-body>
                <span class="font-weight-600 name mb-0 text-sm">{{
                  row.lastName
                }}</span>
              </b-media-body>
            </b-media>
          </template>
        </el-table-column>
        <el-table-column label="Email" prop="email" min-width="140px">
          <template v-slot="{ row }">
            <b-media no-body class="align-items-center">
              <b-media-body>
                <span class="font-weight-600 name mb-0 text-sm">{{
                  row.email
                }}</span>
              </b-media-body>
            </b-media>
          </template>
        </el-table-column>
        <el-table-column label="Gender" prop="gender" min-width="140px">
          <template v-slot="{ row }">
            <b-media no-body class="align-items-center">
              <b-media-body>
                <span class="font-weight-600 name mb-0 text-sm">{{
                  row.gender == "F" ? "Femail" : "Male"
                }}</span>
              </b-media-body>
            </b-media>
          </template>
        </el-table-column>
        <el-table-column label="Status" min-width="170px" prop="status">
          <template v-slot="{ row }">
            <badge class="badge-dot mr-4">
              <i :class="`bg-${row.statusType}`"></i>
              <span class="status" :class="`text-${row.status}`">{{
                row.status
              }}</span>
            </badge>
          </template>
        </el-table-column>
        <el-table-column label="Created At" prop="createdAt" min-width="140px">
          <template v-slot="{ row }">
            <b-media no-body class="align-items-center">
              <b-media-body>
                <span class="font-weight-600 name mb-0 text-sm">{{
                  row.createdAt
                }}</span>
              </b-media-body>
            </b-media>
          </template>
        </el-table-column>
        <el-table-column label="Actions" prop="Actions" min-width="240px">
          <template v-slot="{ row }">
            <b-media no-body class="align-items-center">
              <b-media-body>
                <div>
                  <button
                    type="button"
                    class="btn btn-default"
                    v-on:click="editData(row._id)"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    class="btn btn-danger"
                    v-on:click="deleteData(row._id)"
                  >
                    Delete
                  </button>
                </div>
              </b-media-body>
            </b-media>
          </template>
        </el-table-column>
        <!-- <el-table-column label="Users" min-width="190px">
        <div class="avatar-group">
          <a
            href="#"
            class="avatar avatar-sm rounded-circle"
            data-toggle="tooltip"
            data-original-title="Ryan Tompson"
          >
            <img alt="Image placeholder" src="img/theme/team-1.jpg" />
          </a>
          <a
            href="#"
            class="avatar avatar-sm rounded-circle"
            data-toggle="tooltip"
            data-original-title="Romina Hadid"
          >
            <img alt="Image placeholder" src="img/theme/team-2.jpg" />
          </a>
          <a
            href="#"
            class="avatar avatar-sm rounded-circle"
            data-toggle="tooltip"
            data-original-title="Alexander Smith"
          >
            <img alt="Image placeholder" src="img/theme/team-3.jpg" />
          </a>
          <a
            href="#"
            class="avatar avatar-sm rounded-circle"
            data-toggle="tooltip"
            data-original-title="Jessica Doe"
          >
            <img alt="Image placeholder" src="img/theme/team-4.jpg" />
          </a>
        </div>
      </el-table-column>

      <el-table-column label="Completion" prop="completion" min-width="240px">
        <template v-slot="{ row }">
          <div class="d-flex align-items-center">
            <span class="completion mr-2">{{ row.completion }}%</span>
            <div>
              <base-progress :type="row.statusType" :value="row.completion" />
            </div>
          </div>
        </template>
      </el-table-column> -->
      </el-table>
    </b-card>
  </div>
</template>
<script>
import users from "./../projects";
import { Table, TableColumn } from "element-ui";
import Swal from "sweetalert2";
export default {
  name: "light-table",
  components: {
    [Table.name]: Table,
    [TableColumn.name]: TableColumn,
  },
  data() {
    return {
      users,
      currentPage: 1,
    };
  },
  methods: {
    editData: function editData(ev) {
      console.log(ev);
    },
    deleteData: function (id) {    
      fetch(`http://192.168.102.92:3003/admin/users/delete/${id}`,{
          method: 'POST',
      })
        .then(async (response) => {
          const data = await response.json();
          if (!response.ok) {
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
          }
          this.users = this.created();
        })
        .catch((error) => {
          this.errorMessage = error;
          console.error("There was an error!", error);
        });
        
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });
      Toast.fire({
        icon: "success",
        title: "The User was deleted successfully!",
      });
    },
  },   
  created() {
    fetch("http://192.168.102.92:3003/admin/users")
      .then(async (response) => {
        const data = await response.json();
        if (!response.ok) {
          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
        }
        this.users = data.data;
      })
      .catch((error) => {
        this.errorMessage = error;
        console.error("There was an error!", error);
      });
  },
};
</script>
