import { Injectable } from '@angular/core';

import { Celebrity } from './celebrity';
import { Celebrities } from './mock-data';

@Injectable()
export class CelebrityService{
	getData(): Celebrity[]{
		return Celebrities;
	}
}