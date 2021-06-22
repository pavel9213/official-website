function createMenu(param) {
    return `
    <template>
      <div class="content">
        <div class="menu-content">
          <div class="left-content">
            <div
              class="html-item"
              @click="toActice('`+ param.a1_link + `')"
            >
            `+ param.a1.html + `
              <p class="click-articel">READ MORE</p>
            </div>
        <div
            v-if="`+ param.a2.more + `"
            class="html-item"
            @click="toActice('`+ param.a2_link + `')"
          >
          `+ param.a2.html + `
            <p class="click-articel">READ MORE</p>
          </div>
    
    
        <div
          class="html-item"
          v-if="`+ param.a3.more + `"
          @click="toActice('`+ param.a3_link + `')"
        >
        `+ param.a3.html + `
          <p class="click-articel">READ MORE</p>
        </div>
        <el-button type="" icon="el-icon-arrow-left" class="menu-left-btn"
        v-if="`+ param.is_p + `"
        @click="toActice('`+ param.p_link + `')"
        >Previous</el-button
      >
      <el-button type="" class="menu-right-btn"
      v-if="`+ param.is_next + `"
      @click="toActice('`+ param.next_link + `')"
        >Next<i class="el-icon-arrow-right el-icon--right"></i
      ></el-button>
    
          </div>
          <div class="line"></div>
          <div class="right-content">
            <p class="right-title">4EVERLAND Blog</p>
            <p class="right-content2">
              4everland is a cloud computing platform designed to help developers
              develop Web 3.0 applications efficiently: permissionless, censorship
              resistant, and free of centralized gatekeepers. Welcome to the new
              Internet.
            </p>
            <div style="margin-top: 50px">
              <a target="_blank" href="https://github.com/4everland">
                <span
                  class="iconfont icon-github right-icon"
                  style="margin-left: 0px"
                ></span
              ></a>
    
              <a target="_blank" href="https://twitter.com/4everland_org">
                <span class="iconfont icon-changyonglogo44 right-icon"></span
              ></a>
              <a
                target="_blank"
                href="https://t.me/org_4everland
    "
              >
                <span class="iconfont icon-telegram right-icon"></span
              ></a>
              <a target="_blank" href="https://www.reddit.com/user/4everland_org/">
                <span class="iconfont icon-reddit right-icon"></span
              ></a>
              <a target="_blank" href="https://4everland.medium.com/">
                <span class="iconfont icon-medium-circle-fill right-icon"></span
              ></a>
              <a target="_blank" href="https://discord.gg/sxtHDvvpuT">
                <span class="iconfont icon-discord-fill right-icon"></span
              ></a>
              <a target="_blank" href="mail:contact@4everland.org">
                <span class="iconfont icon-youjian right-icon"></span
              ></a>
            </div>
          </div>
        </div>
      </div>
    </template>
    <script>
    export default {
      components: {},
      created() {},
      mounted() {},
      data() {
        return {
        };
      },
      methods: {
        toActice(link) {
          this.$router.push({
            path: link,
          });
        },
      },
    };
    </script>
    
    <style scoped>
    @media only screen and (max-width: 1280px) {
      .content {
        position: relative;
        top: 1.333333rem;
        width: 100%;
        min-height: 400px;
        background-color: #1e2226;
      }
    
      .menu-content {
        position: relative;
        width: 9.066667rem;
        min-height: 15.333333rem;
        margin: 0 auto;
        background-color: #fff;
        padding-bottom: 2.666667rem;
    
        overflow: hidden;
      }
    
      .html-item {
        position: relative;
        width: 8.533333rem;
        min-height: 100px;
        box-sizing: border-box;
        padding: 20px;
        cursor: pointer;
      }
    
      .left-content {
        position: relative;
        width: 840px;
        min-height: 1200px;
        float: left;
      }
      .line {
        display: none;
      }
    
      .acticle-title {
        position: relative;
        font-size: 30px;
        cursor: pointer;
      }
      .article-content {
        position: relative;
        width: 100%;
        font-size: 14px;
        line-height: 24px;
        margin-top: 10px;
        color: #666;
        cursor: pointer;
      }
      .article-img {
        position: relative;
        width: 100%;
        height: 320px;
        object-fit: cover;
        margin-top: 10px;
        cursor: pointer;
      }
      .click-articel {
        position: relative;
        font-size: 16px;
        color: #0397ff !important;
        font-weight: 500;
        line-height: 50px;
        cursor: pointer;
      }
    
      .right-content {
        display: none;
      }
    
      .acticle-time {
        position: relative;
        font-size: 14px;
        line-height: 30px;
        color: #666666;
      }
    }
    @media only screen and (min-width: 1280px) {
      .content {
        position: relative;
        top: 100px;
        width: 100%;
        min-height: 400px;
        background-color: #1e2226;
      }
    
      .menu-content {
        position: relative;
        width: 1200px;
        min-height: 1600px;
        margin: 0px auto;
        background-color: #fff;
        padding-bottom: 200px;
        overflow: hidden;
      }
    
      .html-item {
        position: relative;
        width: 820px;
        min-height: 100px;
        box-sizing: border-box;
        padding: 40px;
        cursor: pointer;
      }
    
      .left-content {
        position: relative;
        width: 840px;
        min-height: 1200px;
        float: left;
      }
      .line {
        position: relative;
        top: 104px;
        width: 1px;
        height: 359px;
        border-left: 1px dashed #888;
        float: left;
      }
    
      .acticle-title {
        position: relative;
        font-size: 30px;
        cursor: pointer;
      }
      .article-content {
        position: relative;
        width: 100%;
        font-size: 14px;
        line-height: 24px;
        margin-top: 10px;
        color: #666;
        cursor: pointer;
      }
      .article-img {
        position: relative;
        width: 100%;
        height: 400px;
        object-fit: cover;
        margin-top: 10px;
        cursor: pointer;
      }
      .click-articel {
        position: relative;
        font-size: 16px;
        color: #7db4dc !important;
        font-weight: 500;
        line-height: 50px;
        cursor: pointer;
      }
    
      .right-content {
        position: relative;
        width: 320px;
        min-height: 600px;
        box-sizing: border-box;
        padding-left: 40px;
        float: left;
        color: #1e1d1e;
      }
    
      .right-title {
        position: relative;
        margin-top: 55px;
        font-size: 16px;
        color: #1e2226;
        font-weight: 500;
      }
    
      .right-content2 {
        position: relative;
        width: 300px;
        margin-top: 40px;
        font-size: 14px;
        line-height: 24px;
        color: #666;
      }
      .acticle-time {
        position: relative;
        font-size: 14px;
        line-height: 30px;
        color: #666666;
      }
    }
    
    .right-link {
      position: relative;
      font-size: 14px;
      color: #7db4dc;
      line-height: 60px;
      font-weight: 400;
    }
    .right-icon {
      margin: 5px;
      color: #000 !important;
    }
    
    .html-item img {
        position: relative;
        display: block;
        width: 100%;
        margin-bottom: 30px;
      }
    
      .html-item h1 {
        position: relative;
        display: block;
        width: 100%;
        text-align: center;
        font-size: 0.533333rem;
        line-height: 1.066667rem;
        margin-bottom: 30px;
      }
    
      .html-item p {
        line-height: 20px;
        color: #989898;
        margin-bottom: 30px;
      }
    
      .html-item h3 {
        line-height: 20px;
        color: #989898;
        font-size: 14px;
      }
    
      .html-item strong {
        line-height: 20px;
        color: #989898;
        font-size: 14px;
      }
    
      .html-item li {
        line-height: 20px;
        color: #989898;
        font-size: 14px;
      }
      .menu-left-btn {
        position: absolute;
        left: 20px;
      }
      .menu-right-btn {
        position: absolute;
        right: 20px;
      }
    </style>
                        
                        `
}

module.exports = {
    createMenu
}
