import { Component, Input, OnInit } from '@angular/core';
import { IChatCommandResponse, Logger } from '../../service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  public fileName = `MapComponent`;
  @Input() mapData:any | undefined;

  constructor(private logger: Logger) { }

  ngOnInit(): void {
    this.logger.debug(this.fileName, `:: ngOnInit ::`);
    this.logger.debug(this.fileName, this.mapData);
  }

}
