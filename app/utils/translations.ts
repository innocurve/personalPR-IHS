export type Language = 'ko' | 'en' | 'ja' | 'zh';

export type TranslationKey = string;

export type TranslationDictionary = {
  [key in TranslationKey]: {
    [lang in Language]: string;
  };
};

export const translations: TranslationDictionary = {
  profile: {
    ko: '프로필',
    en: 'Profile',
    ja: 'プロフィール',
    zh: '个人资料',
  },
  values: {
    ko: '가치관',
    en: 'Values',
    ja: '価値観',
    zh: '价值观',
  },
  valuesDescription: {
    ko: 'AI로\n더 나은 삶을 만들고\n인연을 소중히',
    en: 'Creating better lives\nwith AI and\nvaluing relationships',
    ja: 'AIで\nより良い人生を創り\n縁を大切に',
    zh: '用AI\n创造更好的生活\n珍惜缘分',
  },
  history: {
    ko: '연혁',
    en: 'History',
    ja: '経歴',
    zh: '历史',
  },
  activities: {
    ko: '프로젝트',
    en: 'Projects',
    ja: 'プロジェクト',
    zh: '项目',
  },
  name: {
    ko: '오경찬',
    en: 'Kyungchan Oh',
    ja: '吳烱燦',
    zh: '吳烱燦',
  },
  title: {
    ko: 'Financial Planner · 사단법인 부본부장',
    en: 'Financial Planner · Vice Director of the Association',
    ja: 'ファイナンシャルプランナー · 社団法人副本部長',
    zh: '理财规划师 · 社团法人副本部长',
  },
  birth: {
    ko: '출생',
    en: 'Birth',
    ja: '生年月日',
    zh: '出生',
  },
  birthDate: {
    ko: '1998년 5월 14일',
    en: 'May 14, 1998',
    ja: '1998年5月14日',
    zh: '1998年5月14日',
  },
  affiliation: {
    ko: '소속',
    en: 'Affiliations',
    ja: '所属',
    zh: '隶属',
  },
  affiliationDescription: {
    ko: '메리츠 RCM본부 2본부 3지점 FP\n(사)대한청년을세계로 대전본부 부본부장\n새마을 대덕구청년미래연대 부회장',
    en: 'Financial Planner, Meritz RCM Division 2 Branch 3\nVice Director, Korea Youth to the World Association Daejeon Branch\nVice Chairman, Saemaul Daedeok-gu Youth Future Alliance',
    ja: 'メリッツRCM本部第2本部第3支店 FP\n(社)大韓青年を世界へ大田本部副本部長\nセマウル大徳区青年未来連帯副会長',
    zh: '美利兹RCM本部第2本部第3支店 理财规划师\n(社)韩国青年走向世界大田本部副本部长\n新村大德区青年未来联合副会长',
  },
  education: {
    ko: '학력',
    en: 'Education',
    ja: '学歴',
    zh: '教育',
  },
  educationDescription: {
    ko: '추가 예정',
    en: 'To be updated',
    ja: '追加予定',
    zh: '待添加',
  },
  field: {
    ko: '분야',
    en: 'Fields',
    ja: '分野',
    zh: '领域',
  },
  fieldDescription: {
    ko: 'AI, 보험, 청년',
    en: 'AI, Insurance, Youth',
    ja: 'AI、保険、青年',
    zh: 'AI，保险，青年',
  },
  mbti: {
    ko: 'MBTI',
    en: 'MBTI',
    ja: 'MBTI',
    zh: 'MBTI',
  },
  mbtiType: {
    ko: 'ESTJ',
    en: 'ESTJ',
    ja: 'ESTJ',
    zh: 'ESTJ',
  },
  contact: {
    ko: '문의',
    en: 'Contact',
    ja: 'お問い合わせ',
    zh: '联系',
  },
  smartOptions: {
    ko: '스마트 옵션',
    en: 'Smart Options',
    ja: 'スマートオプション',
    zh: '智能选项',
  },
  socialMedia: {
    ko: 'SNS',
    en: 'Social Media',
    ja: 'SNS',
    zh: '社交媒体',
  },
  viewMore: {
    ko: '자세히 보기',
    en: 'View More',
    ja: '詳細を見る',
    zh: '查看更多',
  },
  allRightsReserved: {
    ko: '모든 권리 보유.',
    en: 'All rights reserved.',
    ja: 'All rights reserved.',
    zh: '版权所有。',
  },
  date: {
    ko: '게시일',
    en: 'Date',
    ja: '投稿日',
    zh: '日期',
  },
  summary: {
    ko: '요약',
    en: 'Summary',
    ja: '要約',
    zh: '摘要',
  },
  details: {
    ko: '상세 내용',
    en: 'Details',
    ja: '詳細内容',
    zh: '详情',
  },
  gallery: {
    ko: '갤러리',
    en: 'Gallery',
    ja: 'ギャラリー',
    zh: '画廊',
  },
  backToList: {
    ko: '목록으로 돌아가기',
    en: 'Back to List',
    ja: 'リストに戻る',
    zh: '返回列表',
  },
  expandToggle: {
    ko: '펼쳐보기',
    en: 'Expand',
    ja: '展開する',
    zh: '展开',
  },
  collapseToggle: {
    ko: '숨기기',
    en: 'Collapse',
    ja: '折りたたむ',
    zh: '折叠',
  },
  aiClone: {
    ko: 'AI 클론',
    en: 'AI Clone',
    ja: 'AIクローン',
    zh: 'AI克隆',
  },
  phone: {
    ko: '전화',
    en: 'Phone',
    ja: '電話',
    zh: '电话',
  },
  greetingVideo: {
    ko: '인사 영상',
    en: 'Greeting Video',
    ja: '挨拶動画',
    zh: '问候视频',
  },
  innoCardInquiry: {
    ko: 'InnoCard\n문의',
    en: 'InnoCard\nInquiry',
    ja: 'InnoCard\nお問い合わせ',
    zh: 'InnoCard\n咨询',
  },
  contactOptions: {
    ko: '연락하기',
    en: 'Get in Touch',
    ja: 'お問い合わせ',
    zh: '联系方式',
  },
  greetingTitle: {
    ko: '소중한 인연을 잇고,\n더 나은 미래를 설계하다',
    en: 'Connecting Precious Relationships,\nDesigning a Better Future',
    ja: '大切な縁をつなぎ、\nより良い未来を設計する',
    zh: '连接珍贵的缘分，\n设计更美好的未来',
  },
  greetingDescription: {
    ko: 'AI가 발전할수록,\n인간의 가치는 더욱 선명해집니다.\n\n저는 보험과 AI를 결합해\n더 정확하고 신뢰할 수 있는\n맞춤형 솔루션을 제공합니다.\n\n작은 인연도 소중히 여기며,\n더 나은 미래를 함께 만들어갑니다.',
    en: 'As AI advances,\nhuman value becomes even clearer.\n\nI provide accurate and reliable\ncustomized solutions by combining\ninsurance with AI.\n\nValuing every connection,\nwe create a better future together.',
    ja: 'AIが発展するほど、\n人間の価値はより鮮明になります。\n\n保険とAIを組み合わせ、\nより正確で信頼できる\nカスタマイズされたソリューションを提供します。\n\n小さな縁も大切にし、\nより良い未来を共に創造します。',
    zh: '随着AI的发展，\n人类的价值愈发清晰。\n\n我通过结合保险和AI，\n提供更准确、更可靠的\n定制化解决方案。\n\n珍惜每一份缘分，\n共同创造更美好的未来。',
  },
  chatInputPlaceholder: {
    ko: '메시지를 입력하세요...',
    en: 'Type your message...',
    ja: 'メッセージを入力してください...',
    zh: '请输入消息...',
  },
  cloneTitle: {
    ko: "'s Clone",
    en: "'s Clone",
    ja: "'s Clone",
    zh: "'s Clone"
  },
  formName: {
    ko: '이름',
    en: 'Name',
    ja: '名前',
    zh: '姓名',
  },
  formNamePlaceholder: {
    ko: '이름을 입력하세요',
    en: 'Enter your name',
    ja: '名前を入力してください',
    zh: '请输入姓名',
  },
  formBirthdate: {
    ko: '생년월일',
    en: 'Date of Birth',
    ja: '生年月日',
    zh: '出生日期',
  },
  formBirthdatePlaceholder: {
    ko: 'YYYY-MM-DD',
    en: 'YYYY-MM-DD',
    ja: 'YYYY-MM-DD',
    zh: 'YYYY-MM-DD',
  },
  formPhone: {
    ko: '전화번호',
    en: 'Phone Number',
    ja: '電話番号',
    zh: '电话号码',
  },
  formPhonePlaceholder: {
    ko: '전화번호를 입력하세요',
    en: 'Enter your phone number',
    ja: '電話番号を入力してください',
    zh: '请输入电话号码',
  },
  formInquiry: {
    ko: '문의 내용',
    en: 'Inquiry Details',
    ja: 'お問い合わせ内容',
    zh: '咨询内容',
  },
  formInquiryPlaceholder: {
    ko: '예) 제작 문의',
    en: 'e.g., Production inquiry',
    ja: '例）制作に関するお問い合わせ',
    zh: '例如：制作咨询',
  },
  formSubmit: {
    ko: '제출',
    en: 'Submit',
    ja: '送信',
    zh: '提交',
  },
  back: {
    ko: '뒤로',
    en: 'Back',
    ja: '戻る',
    zh: '返回',
  },
  initialGreeting: {
    ko: '안녕하세요! 저는 오경찬입니다. 무엇을 도와드릴까요?',
    en: 'Hello! I am Kyungchan Oh. How can I help you?',
    ja: 'こんにちは！吳烱燦と申します。何かお手伝いできることはありますか？',
    zh: '你好！我是吳烱燦。我能为您做些什么？'
  },
  cloneGreeting: {
    ko: "안녕하세요! 저는 오경찬's Clone입니다. 무엇을 도와드릴까요?",
    en: "Hello! I'm Kyungchan Oh's Clone. How can I help you?",
    ja: "こんにちは！吳烱燦のクローンです。どのようにお手伝いできますか？",
    zh: "你好！我是吳烱燦的克隆。我能为您做些什么？"
  },
};

export function translate(key: TranslationKey, lang: Language): string {
  try {
    const translation = translations[key]?.[lang] ?? translations[key]?.['ko'] ?? key;
    return translation || key;
  } catch (error) {
    console.error(`Translation error for key: ${key}, language: ${lang}`, error);
    return key;
  }
}

