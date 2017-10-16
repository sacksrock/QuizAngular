
import {Panel} from '../milib/views/panels/panel';
import {EventsAdmin,EventsAdminListener} from '../milib/events/eventsadmin';
import {DataHolder} from '../milib/dataholder/dataholder';
import {Motor} from '../milib/engines/motor';
import {Imagen} from '../milib/views/imgs/imagen';
import {Window} from '../milib/views/window/Window';
import {Button} from '../milib/views/buttons/button';

export class Actividad1 implements EventsAdminListener{

    private motor:Motor;
    private panelMenu:Panel;
    private panelJuego:Panel;
    private imagenFondo:Imagen;
    private imagenWindow:Imagen;
    private Window:Window;
    private buttonExit:Button;
    private buttonContin:Button;
    private buttonNew:Button;

    constructor(vMotor:Motor){
        this.motor=vMotor;
        this.imagenFondo=new Imagen(this.motor,0,0,DataHolder.instance.nScreenWidth,DataHolder.instance.nScreenHeight);
        this.imagenFondo.setImg('./assets/backmain.jpg');
        this.motor.setRaiz(this.imagenFondo);
        this.crearEscenarioMenu();
        
    }

    /**
     * OJO!! AUNQUE EN ESTE EJEMPLO SE USE EL PANEL, ES OBLIGATORIO CREAR UN OBJETO WINDOW EN EL MILIB, Y AGREGARLE EL BOTON
     * DE SALIR EN LA ESQUINA COMO SALE EN EL LA PAGINA WEB. HABRA QUE QUITAR EL PANEL Y USAR WINDOW
     */
    private crearEscenarioMenu():void{
        let pmw=DataHolder.instance.nScreenWidth*0.6;
        let pmh=DataHolder.instance.nScreenHeight*0.6;
        let pmx=DataHolder.instance.nScreenWidth2-(pmw>>1);
        let pmy=DataHolder.instance.nScreenHeight2-(pmh>>1);
        //this.panelMenu=new Panel(this.motor,pmx,pmy,pmw,pmh);
        this.Window=new Window(this.motor,pmx,pmy,pmw,pmh);
        this.motor.addViewToParentView(this.imagenFondo,this.Window);
        //AÑADIMOSIMAGENALWINDOW
        this.imagenWindow=new Imagen(this.motor,0,0,pmw,pmh);
        this.imagenWindow.setImg('./assets/fondo.jpg');
        this.motor.addViewToParentView(this.Window,this.imagenWindow);
        
        //AÑADIMOS LAS PROPIEDADES DE LOS BOTONES TAMAÑO POSICION TEXTO Y SE LO AÑADIMOS A WINDOW
        //TAMAÑO Y POSICION BOTONES 
        this.buttonExit= new Button(this.motor,340,300,200,100);
        this.buttonContin= new Button(this.motor,340,180,200,100);
        this.buttonNew= new Button(this.motor,340,60,200,100);
        //AÑADIMOS TEXTO E IMAGEN A LOS BOTONES
        this.buttonExit.setTexto("SALIR");
        this.buttonExit.setImagePath("./assets/red.png");
        this.buttonContin.setTexto("CONTINUAR");
        this.buttonContin.setImagePath("./assets/blue.png");
        this.buttonNew.setTexto("NUEVO JUEGO");
        this.buttonNew.setImagePath("./assets/green.png");
        //AÑADIMOS LOS BOTONES A WINDOW
        this.motor.addViewToParentView(this.Window,this.buttonExit);
        this.motor.addViewToParentView(this.Window,this.buttonContin);
        this.motor.addViewToParentView(this.Window,this.buttonNew);
       
        
        //this.motor.addViewToParentView(this.imagenFondo,this.panelMenu);
    }

    private crearEscenarioJuego():void{
        
    }


    screenSizeChanged?(vWidth:number,vHeight:number):void{
        console.log("SE HA ACTUALIZADO EL TEMAÑO DE LA PANTALLA");
      }

}