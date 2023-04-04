import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-suggestdetailview',
  templateUrl: './suggestdetailview.component.html',
  styleUrls: ['./suggestdetailview.component.css']
})
export class SuggestdetailviewComponent {

  @Input() ingredients: String = "";
  @Input() foodSuggestionObj: any = null;

}
