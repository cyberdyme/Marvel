export class Thumbnail {
    path: string;
    extension: string;
}

export class ComicItems {
    resourceURI: string;
    name: string;
}

export class SeriesItem {
    resourceURI: string;
    name: string;
}

export class Series {
    available: number;
    collectionURI: string;
    items: SeriesItem[];
    returned: number;
}

export class EventsItem {
    resourceURI: string;
    name: string;
}

export class Events {
    available: number;
    collectionURI: string;
    items: EventsItem[];
    returned: number;
}

export class StoryItem {
    resourceURI: string;
    name: string;
}

export class Stories {
    available: number;
    collectionURI: string;
    items: StoryItem[];
    returned: number;
}

export class Url {
    type: string;
    url: string;
}


export class Comics {
    available: number;
    collectionURI: string;
    items: ComicItems[];
    returned: number;

}

export class CharacterResult {
    id: string;
    name: string;
    description: string;
    modified: Date;
    thumbnail: Thumbnail;
    resourceURI: string;
    series: Series;
    comics: Comics;
    events: Events;
    stories: Stories;
    urls: Url[];

    get Thumbnail():  Thumbnail {
        return this.thumbnail;
    }

    get Series():  SeriesItem[] {
        return this.series.items;
    }
    get Comics():  ComicItems[] {
        return this.comics.items;
    }

    get Events():  EventsItem[] {
        return this.events.items;
    }

    get Stories():  StoryItem[] {
        return this.stories.items;
    }

    get Urls():  Url[] {
        return this.urls;
    }
}

export class CharacterData {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: CharacterResult[];
}

export class CharacterModels {
    code: number;
    status: string;
    copyright: string;
    etag: string;
    data: CharacterData;

    get Characters():  CharacterResult[] {
        return this.data.results;
    }
}
