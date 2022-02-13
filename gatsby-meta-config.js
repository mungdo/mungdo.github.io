module.exports = {
  title: `mungdologs`,
  description: `문주의 기록들`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://mungdo.github.io`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: `mungdo/blog`,
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: `안문주`,
    bio: {
      role: `데이터 사이언티스트`,
      description: ['새로운 가치를 찾는', '매사에 진심인', '꾸준함이 답이라고 여기는'],
      thumbnail: 'mungdo_icon.png', // Path to the image in the 'asset' folder
    },
    social: {
      github: `https://github.com/mungdo`, // `https://github.com/zoomKoding`,
      linkedIn: ``, // `https://www.linkedin.com/in/jinhyeok-jeong-800871192`,
      email: `annmunju@gmail.com`, // `zoomkoding@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2021.12 ~',
        activity: '멀티캠퍼스 데이터 사이언스 국비교육',
        links: {
          github: 'https://github.com/mungdo/multicam_ds',
          post: 'https://mungdo-log.tistory.com/category/%EB%A9%80%ED%8B%B0%EC%BA%A0%ED%8D%BC%EC%8A%A4%28%EA%B5%AD%EB%B9%84%29',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2021.09 ~ 2021.11',
        activity: '제로베이스 네카라쿠배 데이터 사이언스 온라인',
        links: {
          github: 'https://github.com/mungdo/zerobase_ds',
          post: 'https://mungdo-log.tistory.com/category/%EC%A0%9C%EB%A1%9C%EB%B2%A0%EC%9D%B4%EC%8A%A4',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2021.01 ~ 2021.05',
        activity: 'edwith 부스트코스 PY4E 수강',
        links: {
          post: 'https://mungdo-log.tistory.com/category/%EB%8F%85%ED%95%99/4.%20%ED%8C%8C%EC%9D%B4%EC%8D%AC',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2020.03 ~ 2021.03',
        activity: '한성대학교 CRM & 디지털마케팅 부전공, CSRT 학부 연구생',
        links: {
          post: 'https://mungdo-log.tistory.com/category/%EB%8F%85%ED%95%99/1.%20%ED%86%B5%EA%B3%84%EB%B6%84%EC%84%9D',
          post: 'https://mungdo-log.tistory.com/category/CSRT',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2016.03 ~ 2021.09',
        activity: '한성대학교 경영학과 전공',
        links: {
          post: 'https://mungdo-log.tistory.com/category/%EB%8F%85%ED%95%99/5.%20%EB%B9%84%EC%A6%88%EB%8B%88%EC%8A%A4',
        },
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        title: '데이터 시각화 프로젝트',
        description:
          '진행중',
        techStack: ['python', 'crawling'],
        thumbnailUrl: 'blog.png',
        links: {
          post: '/gatsby-starter-zoomkoding-introduction',
          github: 'https://github.com/zoomkoding/zoomkoding-gatsby-blog',
          demo: '',
        },
      },
    ],
  },
};
