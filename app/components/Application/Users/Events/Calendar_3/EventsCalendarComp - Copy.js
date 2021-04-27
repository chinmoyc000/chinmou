import { render } from 'react-dom';
import './Css/index.css';
import React from 'react';
import { ScheduleComponent,ViewsDirective, ViewDirective, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';
import { applyCategoryColor } from './Jss/helper';

import { extend } from '@syncfusion/ej2-base';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { SampleBase } from './Jss/sample-base';
import { PropertyPane } from './Jss/property-pane';
import * as dataSource from './Json/datasource.json';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
/**
 * Schedule events sample
 */
export class Events extends SampleBase {
    constructor() {
        super(...arguments);
        this.data = extend([], dataSource.scheduleData, null, true);
    }
    
    onEventRendered(args) {
        //applyCategoryColor(args, this.scheduleObj.currentView);
    }
    onClear() {
        document.getElementById('EventLog').innerHTML = '';
    }
    onCreate() {
        this.appendElement('Schedule <b>Load</b> event called<hr>');
    }
    onActionBegin() {
        this.appendElement('Schedule <b>Action Begin</b> event called<hr>');
    }
    onActionComplete() {
        this.appendElement('Schedule <b>Action Complete</b> event called<hr>');
    }
    onActionFailure() {
        this.appendElement('Schedule <b>Action Failure</b> event called<hr>');
    }
    onCellDoubleClick() {
        this.appendElement('SChedule <b>Cell Double Click</b> event called<hr>');
    }
    onCellClick() {
        this.appendElement('Schedule <b>Cell Click</b> event called<hr>');
    }
    onNavigating() {
        this.appendElement('Schedule <b>Navigating</b> event called<hr>');
    }
    onDestroyed() {
        this.appendElement('Schedule <b>Destroyed</b> event called<hr>');
    }
    onEventClick() {
        this.appendElement('Schedule <b>Event Click</b> event called<hr>');
    }
    onPopupOpen() {
        this.appendElement('Schedule <b>Popup Open</b> event called<hr>');
    }
    appendElement(html) {
       // let span = document.createElement('span');
       // span.innerHTML = html;
        //let log = document.getElementById('EventLog');
        //log.insertBefore(span, log.firstChild);
    }
    render() {
        return (
            <Paper>
            <ScheduleComponent ref={schedule => this.scheduleObj = schedule} width='100%' height='650px' selectedDate={new Date(2019, 0, 10)} eventSettings={{ dataSource: this.data }} created={this.onCreate.bind(this)} eventRendered={this.onEventRendered.bind(this)} actionBegin={this.onActionBegin.bind(this)} actionComplete={this.onActionComplete.bind(this)} actionFailure={this.onActionFailure.bind(this)} cellClick={this.onCellClick.bind(this)} cellDoubleClick={this.onCellDoubleClick.bind(this)} destroyed={this.onDestroyed.bind(this)} navigating={this.onNavigating.bind(this)} eventClick={this.onEventClick.bind(this)} popupOpen={this.onPopupOpen.bind(this)}>
             <ViewsDirective>
                       
                        <ViewDirective option='Month'/>
                       
                      </ViewsDirective>
              <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}/>
              
            </ScheduleComponent>
            </Paper>
            
          );
    }
}
export default Events;
//render(<Events />, document.getElementById('sample'));