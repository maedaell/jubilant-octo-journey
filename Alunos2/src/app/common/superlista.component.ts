import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';


export class SuperLista {

 lista:any[];
 cols=[];

  constructor(protected service,protected router: Router,protected route: ActivatedRoute) {

  }
  ngOnInit() {
    this.atualiza();
  }

  atualiza(){
    this.service.getAll().then(response=>{
      this.lista=response.values;
    });
  }

  edita(id) {
    this.router.navigate(['detalhe',id],{relativeTo: this.route});
  }

  remove(id) {
    this.service.remove(id)
      .then(() => this.atualiza());    
  }


}
