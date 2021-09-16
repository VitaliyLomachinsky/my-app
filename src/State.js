let store = {
  _state: {
    Dialogs_Messages_Data: {
      DialogsData: [
        { id: 1, userName: "Vitaliy Lomachinsky", lastTimeOnline: "19:32" },
        { id: 2, userName: "Dima Gnevush", lastTimeOnline: "01:12" },
        { id: 3, userName: "Dima Kuzov", lastTimeOnline: "14:32" },
        { id: 4, userName: "Vasiliy Xuuanovich", lastTimeOnline: "02:18" },
      ],

      MessagesData: [
        { id: 1, messageText: "Privet!", sender: true },
        { id: 2, messageText: "Darova", sender: false },
        { id: 3, messageText: "Rad tebya videtb", sender: false },
        { id: 4, messageText: "Kak dela?", sender: true },
        { id: 5, messageText: "Vse xorowo =)", sender: false },
        { id: 6, messageText: "Ooo, a kuda zavtra?", sender: true },
        { id: 7, messageText: "Daleko)", sender: false },
      ],

      MessageTextBuffer: "",
    },

    Profile_Data: {
      postsData: [
        { id: 1, text: "Suup man, crazy game was be yesterday" },
        { id: 2, text: "Hellllo, how are you/???" },
        { id: 3, text: "Go to hell!" },
        { id: 4, text: "Shut the fuck up!" },
        { id: 5, text: "Sheeeeeeeeeeeeesh" },
      ],

      PostTextBuffer: "",
    },

    OnlineFriendsData: {
      onlineFriends: [
        {
          id: 1,
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4V-qIfhkO1dIvfAJkercBZHL4nMGlPXAd6Q&usqp=CAU",
        },
        {
          id: 2,
          url: "https://bipbap.ru/wp-content/uploads/2017/05/1_small-4.jpg",
        },
        {
          id: 3,
          url: "https://wallpapershome.ru/images/pages/pic_v/21479.jpg",
        },
        {
          id: 4,
          url: "https://www.meme-arsenal.com/memes/3ac31984706b47dd24d050b57f825e3b.jpg",
        },
        {
          id: 5,
          url: "https://vypechka-online.ru/wp-content/uploads/2019/09/d12d35ae1ebc70bae05f22c76ca442c3.jpg",
        },
        {
          id: 6,
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCb7sIePfpdp0h2DVVbdwlvkyy3KcL3CiAlg&usqp=CAU",
        },
        {
          id: 7,
          url: "https://static6.depositphotos.com/1029473/605/i/600/depositphotos_6058054-stock-photo-abstract-3d-image.jpg",
        },
        {
          id: 8,
          url: "https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg",
        },
        {
          id: 9,
          url: "https://www.meme-arsenal.com/memes/3ac31984706b47dd24d050b57f825e3b.jpg",
        },
      ],
    },
  },

  GetState() {
    return this._state;
  },

  AddMessage() {
    if (this._state.Dialogs_Messages_Data.MessageTextBuffer != "") {
      let newMessage = {
        id: this._state.Dialogs_Messages_Data.MessagesData.length + 1,
        messageText: this._state.Dialogs_Messages_Data.MessageTextBuffer,
        sender: true,
      };
      this.ChangeMessageBuffer("");
      this._state.Dialogs_Messages_Data.MessagesData.push(newMessage);
      this.RerenderAll(this._state);
    }
  },

  AddPost() {
    if (this._state.Profile_Data.PostTextBuffer != "") {
      let newPost = {
        id: this._state.Profile_Data.postsData.length + 1,
        text: this._state.Profile_Data.PostTextBuffer,
      };

      this._state.Profile_Data.postsData.push(newPost);
      this.ChangePostBuffer("");
      this.RerenderAll(this._state);
    }
  },

  ChangePostBuffer(text) {
    this._state.Profile_Data.PostTextBuffer = text;
    this.RerenderAll(this._state);
  },
  ChangeMessageBuffer(text) {
    this._state.Dialogs_Messages_Data.MessageTextBuffer = text;
    this.RerenderAll(this._state);
  },

  subscribe(observer) {
    this.RerenderAll = observer;
  },
  RerenderAll() {},
};

export default store;
