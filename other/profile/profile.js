var loadFile = function (event) {
    var image = document.getElementById("output");
    image.src = URL.createObjectURL(event.target.files[0]);
  };
  

  new Vue({
    el: "#app",
    data() {
      return {
        Phone: "00 00000-0000",
        editBio: false,
        Bio: "my bio test about myself, what do you know about me?",
        bioIcon: "mdi-pencil",
        focus: "",
        type: "month",
        typeToLabel: {
          month: "Month",
          week: "Week",
          day: "Day",
          "4day": "4 Days"
        },
        selectedEvent: {},
        selectedElement: null,
        selectedOpen: false,
        events: [],
        colors: [
          "blue",
          "indigo",
          "deep-purple",
          "cyan",
          "green",
          "orange",
          "grey darken-1"
        ],
        names: [
          "Meeting",
          "Holiday",
          "PTO",
          "Travel",
          "Event",
          "Birthday",
          "Conference",
          "Party"
        ],
        tab: null,
        items: ["Minha agenda", "Sobre Mim"],
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      };
    },
    mounted() {
      //this.$refs.calendar.checkChange();
    },
    methods: {
      saveBio() {
        this.editBio = !this.editBio;
        this.bioIcon = "mdi-content-save";
        if (!this.editBio) {
          this.bioIcon = "mdi-pencil";
  
          alert("salvo com sucesso!");
        }
      },
      onButtonClick() {
        this.isSelecting = true;
        window.addEventListener(
          "focus",
          () => {
            this.isSelecting = false;
          },
          { once: true }
        );
  
        this.$refs.uploader.click();
      },
      onFileChanged(e) {
        this.selectedFile = e.target.files[0];
  
        // do something
      },
      viewDay({ date }) {
        this.focus = date;
        this.type = "day";
      },
      getEventColor(event) {
        return event.color;
      },
      setToday() {
        this.focus = "";
      },
      prev() {
        this.$refs.calendar.prev();
      },
      next() {
        this.$refs.calendar.next();
      },
      showEvent({ nativeEvent, event }) {
        const open = () => {
          this.selectedEvent = event;
          this.selectedElement = nativeEvent.target;
          requestAnimationFrame(() =>
            requestAnimationFrame(() => (this.selectedOpen = true))
          );
        };
  
        if (this.selectedOpen) {
          this.selectedOpen = false;
          requestAnimationFrame(() => requestAnimationFrame(() => open()));
        } else {
          open();
        }
  
        nativeEvent.stopPropagation();
      },
      updateRange({ start, end }) {
        const events = [];
  
        const min = new Date(`${start.date}T00:00:00`);
        const max = new Date(`${end.date}T23:59:59`);
        const days = (max.getTime() - min.getTime()) / 86400000;
        const eventCount = this.rnd(days, days + 20);
  
        for (let i = 0; i < eventCount; i++) {
          const allDay = this.rnd(0, 3) === 0;
          const firstTimestamp = this.rnd(min.getTime(), max.getTime());
          const first = new Date(firstTimestamp - (firstTimestamp % 900000));
          const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000;
          const second = new Date(first.getTime() + secondTimestamp);
  
          events.push({
            name: this.names[this.rnd(0, this.names.length - 1)],
            start: first,
            end: second,
            color: this.colors[this.rnd(0, this.colors.length - 1)],
            timed: !allDay
          });
        }
  
        this.events = events;
      },
      rnd(a, b) {
        return Math.floor((b - a + 1) * Math.random()) + a;
      }
    },
    vuetify: new Vuetify()
  });
  