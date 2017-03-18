import { Injectable } from '@angular/core';


@Injectable()
export class TranslationService {

    chosenLanguage :string;

    supportedLanguages :string[] = ['es', 'pt']

    translation_list = [
        {
            language : 'es',
            translations :[
                {
                    value : 'Type',
                    trans : 'Tipo'
                },
                {
                    value : 'Description',
                    trans : 'Descripción'
                },
                {
                    value : 'Amount',
                    trans : 'Cantidad'
                },
                {
                    value : 'Date',
                    trans : 'Fecha'
                }
            ]
        },
        {
            language : 'pt',
            translations :[
                {
                    value : 'Type',
                    trans : 'Tipo'
                },
                {
                    value : 'Description',
                    trans : 'Descrição'
                },
                {
                    value : 'Amount',
                    trans : 'Montante'
                },
                {
                    value : 'Date',
                    trans : 'Data'
                }
            ]
        }
    ]

    constructor(){
        if(this.isSupported(navigator.language)){
            this.chosenLanguage = navigator.language;
        }else{
            this.chosenLanguage = 'es';
        }
    }

    isSupported(language :string){
        for( let i of this.supportedLanguages){
            if(i == language){
                return true;
            }
        }
        return false;
    }

    translate(value){
        for (let language of this.translation_list){
            if(language.language == this.chosenLanguage){
                for( let translation of language.translations ){
                    if (value == translation.value){
                        return translation.trans;
                    }
                }
            }

        }

        return value;
    }

}