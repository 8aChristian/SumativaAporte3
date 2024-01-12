
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss'],
})
export class NewsCardComponent implements OnInit {
  @Input() newsTitle: string = "";
  @Input() newsDescription: string = "";
  @Input() newsImage: string = "";

  rows: any[] = [];

  ngOnInit() {
    this.rows = this.getRows();
  }

  getRows(): any[] {
    const newsItems = [
      {
         title: 'Spiderman villains attack',
       description: 'On an afternoon that seemed to be like any other in the bustling city of New York, chaos engulfed the famous Daily Bugle newspaper. Spider-Mans most feared and cunning villains launched a daring attack on the medias headquarters throwing the newsroom into a state of panic and disarray', 
       image: 'https://www.thebrickfan.com/wp-content/uploads/2021/05/LEGO-Marvel-Daily-Bugle.jpg' },

      { 
        title: 'SPIDERMAN NO MORE',
       description: 'n a shocking turn of events, the citys beloved wall-crawler, Spider-Man, has left New York in suspense by abandoning his iconic suit and cape. The usually reliable hero, known for swinging between skyscrapers and foiling criminals, seems to have disappeared without a trace. Witnesses report seeing Spider-Man leave his costume hanging in a secluded alley, leaving citizens puzzled and concerned about the sudden departure of their friendly neighborhood superhero. As the city holds its breath, questions linger: Has Spider-Man retired? Is this a temporary hiatus? ',
        image: 'https://images.propstore.com/23ea294dc1e1887b96bd856a0aba1fbc-2.jpg' },


      { 
        title: 'SPIDERMAN CAME BACK', 
      description: 'n a stunning reversal, the citys once-missing hero, Spider-Man, has swung back onto the scene, donning his iconic suit once again. Reports flooded in as citizens witnessed the masked vigilante leaping back into action, just as mysteriously as he disappeared. The web-slingers return has left New Yorkers both relieved and intrigued, with many speculating about the reasons behind his brief hiatus. Sources say Spider-Man resumed his patrols with even more agility and determination, leaving criminals caught in the web of justice once more.', 
      image: 'https://i.pinimg.com/474x/3e/bc/62/3ebc62d4837bbe4bf52aabe16ecf9840.jpg' },

    ];
    const rows = [];
    for (let i = 0; i < newsItems.length; i += 3) {
      rows.push(newsItems.slice(i, i + 3));
    }
    return rows;
  }
}
