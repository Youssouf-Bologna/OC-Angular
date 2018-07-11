export class Post {
    public title: string;
    public content: string;
    public loveIts: number;
    public post_date: string;

    public constructor(title: string, content: string) {
        this.title = title;
        this.content = content;
        this.loveIts = 0;
        this.post_date = new Date().toLocaleTimeString('fr',{weekday: "long", year: "numeric", month: "long", day: "numeric"});
    }
  
}
