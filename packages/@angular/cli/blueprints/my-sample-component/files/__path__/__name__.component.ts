import { Component, OnInit<% if(viewEncapsulation) { %>, ViewEncapsulation<% }%><% if(changeDetection) { %>, ChangeDetectionStrategy<% }%> } from '@angular/core';

@Component({
  selector: '<%= selector %>',<% if(inlineTemplate) { %>
  template: `
    <p>
      <%= dasherizedModuleName %> Works!
    </p>
  `,<% } else { %>
  templateUrl: './tpl/<%= dasherizedModuleName %>.component.html',<% } if(inlineStyle) { %>
  styles: []<% } else { %>
  styleUrls: ['./styles/<%= dasherizedModuleName %>.component.<%= styleExt %>']<% } %><% if(viewEncapsulation) { %>,
  encapsulation: ViewEncapsulation.<%= viewEncapsulation %><% } if (changeDetection) { %>,
  changeDetection: ChangeDetectionStrategy.<%= changeDetection %><% } %>
})
export class <%= classifiedModuleName %>Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
