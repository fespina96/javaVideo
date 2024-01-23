import { Component } from '@angular/core';
import { Video } from '../../../models/video';
import { VideoService } from '../../../services/video.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-form-video',
  templateUrl: './form-video.component.html',
  styleUrl: './form-video.component.css'
})
export class FormVideoComponent {
    videoFormInput:Video = {
        id:0,
        url:"",
        categoria:"",
        titulo:"",
        descripcion:"",
        visitas:0,
        meGusta:0,
        noMeGusta:0
    };

    constructor(private videoService:VideoService){}

    ngOnInit(): void {

    }

    formProcedure(formInput:NgForm){
        if(formInput.valid && formInput.touched){
            this.videoService.addNewVideo(this.videoFormInput).subscribe(
                (res)=>console.log(res)
            )
        }
    }

}
