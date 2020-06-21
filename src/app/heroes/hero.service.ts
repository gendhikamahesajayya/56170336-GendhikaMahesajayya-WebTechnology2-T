import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
    providedIn: "root",
})

export class HeroService {
    baseUrl = `https://www.dnd5eapi.co/api`;


    constructor(private http: HttpClient) {}

    getHeroes(idxstart = 0) {
        if (idxstart) {
            return this.http.get(`${this.baseUrl}/monsters?offset=${idxstart}`);
        }
        return this.http.get(`${this.baseUrl}/monsters`);

    }

    getHero(index: string) {
        return this.http.get(`${this.baseUrl}/monsters/${index}`);
    }

}

