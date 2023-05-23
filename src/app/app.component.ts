import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'vinculacion_angular';

  isSidebarActive = false;
  selectedTestimonial: any = null;

  pages = [
    { name: "inicio", id: "inicio" },
    { name: "comunidad", id: "comunidad" },
    { name: "estadistica", id: "estadistica" },
    { name: "contacto", id: "contacto" },
    { name: "nosotros", id: "nosotros" }
  ];
  activePageId = "inicio";
  currentPage = "inicio";

  formInputs: HTMLInputElement[];

  constructor() {
    this.formInputs = [];
  }

  ngOnInit(): void {
    this.formInputs = Array.from(document.querySelectorAll('input'));
  }

  toggleSidebar(): void {
    this.isSidebarActive = !this.isSidebarActive;
  }

  selectTestimonial(testimonial: any): void {
    this.selectedTestimonial = testimonial;
  }

  closeModal(): void {
    this.selectedTestimonial = null;
  }

  //Navegacion
  selectPage(page: any): void {
    this.activePageId = page.id;
    this.currentPage = page.id;
    window.scrollTo(0, 0);
  }
}
