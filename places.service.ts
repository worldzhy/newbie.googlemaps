import {Injectable} from '@nestjs/common';
import {ConfigService} from '@nestjs/config';
import {PlacesClient} from '@googlemaps/places';

/**
 * API introduction
 * https://developers.google.com/maps/documentation/places/web-service/op-overview
 */

@Injectable()
export class PlacesService {
  private client: PlacesClient;

  constructor(private readonly config: ConfigService) {
    this.client = new PlacesClient({
      apiKey: this.config.getOrThrow<string>(
        'microservices.googlemaps.credentials.apiKey'
      ),
    });
  }

  /**************************************
   * Places Operations                  *
   **************************************/

  /* End */
}
