import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IProject } from '../project.model'

@Component({
    selector: 'project-thumbnail',
    templateUrl: './project-thumbnail.component.html',
    styleUrls: ['./project-thumbnail.component.css']
})

export class ProjectThumbnailComponent {
    @Input() project: IProject;
    @Output() projectClick = new EventEmitter();

    handleClickMe() {
        this.projectClick.emit(this.project.name);
    }
}