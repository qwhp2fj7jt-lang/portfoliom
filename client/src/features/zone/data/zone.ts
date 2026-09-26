import type { ZonePost } from "../types";

const DIR = "/assets/images/zone";

export const zonePosts: ZonePost[] = [
  {
    id: "z1",
    image: {
      src: `${DIR}/flowers.jpg`,
      width: 1024,
      height: 1536,
      alt: "Kocaeli Gölcük'te çiçeklerle ilgilenirken",
      blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QBMRXhpZgAATU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAACqADAAQAAAABAAAADwAAAAD/wAARCAAPAAoDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9sAQwAGBgYGBgYKBgYKDgoKCg4SDg4ODhIXEhISEhIXHBcXFxcXFxwcHBwcHBwcIiIiIiIiJycnJycsLCwsLCwsLCws/9sAQwEHBwcLCgsTCgoTLh8aHy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4u/90ABAAB/9oADAMBAAIRAxEAPwBmi3uoadbpBpbBCISVPlj5pFILK+88fL0xjFTTHxGszqwmyGIO1cjr2IHIrkIXkijKh1EGUYuF+6vcgDDbuMHB59a6l9YilcyR/aGViSCAgBB6EAtkfSvnHSUluvmey1bTl+5M/9k=",
    },
    place: "Kocaeli / Gölcük",
    likes: 11,
    comments: [],
    text: "Çiçeklerle uğraşmak, renklerin içinde kaybolmak ve sadece anın tadını çıkarmak… Bazen hayatın koşuşturması arasında durup nefes almak gerekiyor. En sade anlar bile insanın içini en çok dolduran anlar oluyor.",
  },
  {
    id: "z2",
    image: {
      src: `${DIR}/library.jpg`,
      width: 1024,
      height: 1536,
      alt: "İstanbul Salt Galata kütüphanesinde kitap okurken",
      blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QBMRXhpZgAATU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAACqADAAQAAAABAAAADwAAAAD/wAARCAAPAAoDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9sAQwAGBgYGBgYKBgYKDgoKCg4SDg4ODhIXEhISEhIXHBcXFxcXFxwcHBwcHBwcIiIiIiIiJycnJycsLCwsLCwsLCws/9sAQwEHBwcLCgsTCgoTLh8aHy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4u/90ABAAB/9oADAMBAAIRAxEAPwDktFVEiuJPNWKezhSWOIYZJEIJckcFiOB1wK9Xh8V+EjChfYGKjI8snBx645rxKTVGiuG0l5mt2vLdY4JURRkkkKkpQbsEnBI+uDXuMN0YokjeBAyqAcAYyB24r5/FQSleotz6TDLmjy03sf/Z",
    },
    place: "İstanbul / Salt Galata",
    likes: 46,
    comments: [],
    text: "Bugün kütüphaneye gidip kendime güzel bir zaman ayırdım. Sessizliğin içinde kitap okuyup vakit geçirmek ruhuma iyi geldi. Bazen en güzel anlar, sade ve huzurlu geçen anlardır.",
  },
  {
    id: "z3",
    image: {
      src: `${DIR}/camp.jpg`,
      width: 1024,
      height: 1024,
      alt: "Bolu Yedigöller'de kamp",
      blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QCMRXhpZgAATU0AKgAAAAgABQESAAMAAAABAAEAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAIdpAAQAAAABAAAAWgAAAAAAAABIAAAAAQAAAEgAAAABAAOgAQADAAAAAQABAACgAgAEAAAAAQAAAAqgAwAEAAAAAQAAAAoAAAAA/8AAEQgACgAKAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/bAEMABgYGBgYGCgYGCg4KCgoOEg4ODg4SFxISEhISFxwXFxcXFxccHBwcHBwcHCIiIiIiIicnJycnLCwsLCwsLCwsLP/bAEMBBwcHCwoLEwoKEy4fGh8uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLv/dAAQAAf/aAAwDAQACEQMRAD8A8q0mwgtUjGoRjc0fmRl+CMjKnHIIz/OuRuBK1xIzLyXYnCDHXtWjqNxcS2duZZHcgYBZicD8awSB6Vjhq9Sac29zqxVGFNqmlsf/2Q==",
    },
    place: "Bolu / Yedigöller",
    likes: 39,
    comments: [{ name: "Elif", when: "3 gün önce", text: "Yedigöller sonbaharda bambaşka oluyor, çok güzel kare!" }],
    text: "Şehrin gürültüsünü geride bırakıp Bolu’nun doğasında kayboldum. Biraz huzur, biraz ben.",
  },
  {
    id: "z4",
    image: {
      src: `${DIR}/travels.jpg`,
      width: 1024,
      height: 1024,
      alt: "İstanbul Beşiktaş'ta haritayla müze gezisi",
      blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QBMRXhpZgAATU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAACqADAAQAAAABAAAACgAAAAD/wAARCAAKAAoDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9sAQwAGBgYGBgYKBgYKDgoKCg4SDg4ODhIXEhISEhIXHBcXFxcXFxwcHBwcHBwcIiIiIiIiJycnJycsLCwsLCwsLCws/9sAQwEHBwcLCgsTCgoTLh8aHy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4u/90ABAAB/9oADAMBAAIRAxEAPwDSW5udUIlhtmRFgMqlF2hXyNu4nGVOCBnPNb76xY27m3nso/MjJV/u/eXg9j3rm9Rlli8OXwidkCw5G0kY+6e3vQwDMWYZJOSTXm1MZUpvmTevn2PSpYKnVjytLTyP/9k=",
    },
    place: "İstanbul / Beşiktaş",
    likes: 49,
    comments: [
      { name: "Mert", when: "1 hafta önce", text: "Hangi müzeleri gezdin? Önerin var mı?" },
      { name: "Zeynep Baş", when: "1 hafta önce", text: "Deniz Müzesi ve Yıldız Sarayı, ikisi de harika!" },
      { name: "Ayşe", when: "5 gün önce", text: "Son cümle çok güzel olmuş 🙂" },
      { name: "Can", when: "2 gün önce", text: "Beşiktaş’ta yürüyüş rotası paylaşır mısın?" },
    ],
    text: "Bugün şehirde biraz kaybolmaya, tarihin izlerini takip etmeye karar verdim. Her müze, geçmişten bugüne uzanan ayrı bir hikâye anlatıyor… Sessiz duvarların arasında dolaşırken zaman yavaşlıyor gibi. Yeni yerler görmek, farklı kültürlere dokunmak ve her adımda biraz daha öğrenmek iyi geliyor. Müze gezmek sadece görmek değil; hissetmek, anlamak ve düşünmek aslında.",
  },
];
