import axios from 'axios';
const state = {
    blogs: [ ],
    blog: ''
  };
  
  const getters = {
    allBlogs: state => state.blogs,
    blogWithId: state => state.blog
  };
  
  const actions = {
    async fetchBlogs({ commit }) {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts?_start=0&_limit=50'
      );
  
      if(state.blogs.length == 0){
        commit('setBlogs', response.data);
        console.log("exist")
      }
    },
    async fetchBlogWithId({ commit }, id) {
      let num = id;
      const response = state.blogs.filter(item => item.id == num);
  
      commit('getBlogWithId', response);
    },
    async addBlog({ commit }, content) {
      const response = await axios.post(
        'https://jsonplaceholder.typicode.com/posts',
        {
          title: content.title,
          body: content.body,
          userId: content.userId,
          id: content.id, completed: false }
      );
  
      commit('newBlog', response.data);
    },
    async deleteBlog({ commit }, id) {
      commit('removeBlog', id);
    },
    async filterBlogs({ commit }, e) {
      // Get selected number
      const limit = parseInt(
        e.target.options[e.target.options.selectedIndex].innerText
      );
  
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
      );
  
      commit('setBlogs', response.data);
    },
    async updateBlog({ commit }, updBlog) {
      const response = updBlog
      commit('updateBlog', response);
    }
  };
  
  const mutations = {
    setBlogs: (state, blogs) => (state.blogs = blogs),
    getBlogWithId: (state, blog) => (state.blog = blog),
    newBlog: (state, blog) => state.blogs.unshift(blog),
    removeBlog: (state, id) => {
      state.blogs.map((item, index) => {
        if(item.id == id){
          state.blogs.splice(index, 1)
        }
      })
    },
    updateBlog: (state, updBlog) => {
      state.blogs.map((item, index) => {
        if(item.id == updBlog.id){
          state.blogs[index] = updBlog
        }
      })
    }
  };
  
  export default {
    state,
    getters,
    actions,
    mutations
  };