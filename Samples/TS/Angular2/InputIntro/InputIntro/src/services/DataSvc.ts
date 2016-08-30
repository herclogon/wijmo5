'use strict';

import { Injectable } from '@angular/core';

// Common data service
@Injectable()
export class DataSvc {
    // data used to generate random items
    getMusicians(): any[] {
        var names = 'Paul,Mark,Pete,Ringo,Luke,Jacob,John,Nate,Zym,George,Toom,Crash,Boom,Dewd'.split(','),
            musicians = [];
        for (var i = 0; i < names.length; i++) {
            var item = {
                id: i,
                name: names[i],
                photo: '|Paul|John|George|Ringo|'
                    .indexOf('|' + names[i] + '|') >= 0
                    ? 'resources/' + names[i] + '.png'
                    : null
            };
            musicians.push(item);
        }
        return musicians;
    }
}