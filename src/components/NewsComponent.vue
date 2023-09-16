<template>
  <div class="text-end mt-4">
    <button type="button" class="btn btn-primary text-white" @click="() => openModal('create')">
      建立新的文章
    </button>
  </div>
  <div class="table-responsive-xxl">
    <table class="admin_table table table-hover mt-4">
      <thead class="table-light">
        <tr>
          <th width="120">
            日期
          </th>
          <th>標題</th>
          <th width="100">
            是否啟用
          </th>
          <th width="120">
            編輯
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="article in articles" :key="article.id">
          <td>{{ $moment(new Date(article.create_at * 1000)).format('YYYY-MM-DD') }}</td>
          <td class="text-truncate">{{ article.title }} </td>
          <td>
            <span class="text-success" v-if="article.isPublic">啟用</span>
            <span v-else>未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <button type="button" class="btn btn-outline-primary btn-sm"
                @click="() => openModal('edit',article.id)">
                編輯
              </button>
              <button type="button" class="btn btn-outline-danger btn-sm"
                @click="() => openModal('delete',article.id)">
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
const { VITE_URL, VITE_PATH } = import.meta.env
import Swal from 'sweetalert2'

export default {
  data() {
    return {
      articles: [],
      articleTemp: {},
      isNew: false,
      updateTitle: '新增文章',
      page: {},
      isLoading: false,
      isDone: true
    }
  },
  methods: {
    getData () {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexschool\s*=\s*([^;]*).*$)|^.*$/, '$1')
      this.$http.defaults.headers.common.Authorization = token
      const url = `${VITE_URL}/v2/api/${VITE_PATH}/admin/articles`
      this.$http
        .get(url)
        .then((res) => {
          this.articles = res.data.articles
          this.page = res.data.pagination
          this.isLoading = false 
        })
        .catch((err) => {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: `${err.response.data.message}`,
            showConfirmButton: false,
            timer: 1000,
            timerProgressBar: true,
            toast: true
          })
        })
    }
  },
  mounted() {
    this.getData()
  }
}
</script>