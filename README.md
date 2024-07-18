 # Blog con Sanity CMS

Questo repository contiene la configurazione e gli schemi per un blog implementato utilizzando Sanity CMS. Il progetto fornisce una struttura di base per un blog con articoli, autori, categorie e prodotti correlati.

## Installazione

Per iniziare con questo progetto, segui questi passaggi:

1. Clona il repository
2. Installa Sanity CLI globalmente (se non l'hai già fatto): 

     _npm install -g @sanity/cli_

3. Naviga nella directory del progetto e installa le dipendenze:

     _cd nome-progetto_
   
     _npm install_

4. Inizializza un nuovo progetto Sanity:

     _sanity init_

## Struttura del Progetto

Il progetto include i seguenti schemi principali:

- `post`: Definisce la struttura degli articoli del blog
- `author`: Rappresenta gli autori degli articoli
- `category`: Categorie per organizzare gli articoli
- `product`: Prodotti correlati agli articoli

Gli schemi sono definiti nella directory `schemaTypes/`.

## Personalizzazione

Puoi personalizzare gli schemi esistenti o aggiungerne di nuovi modificando i file nella directory `schemaTypes/`. Assicurati di aggiornare il file `index.ts` principale quando aggiungi nuovi schemi.

## Utilizzo

Dopo aver configurato il progetto, puoi avviare lo Studio Sanity localmente con:

  _sanity start_

  _sanity deploy_

Questo renderà il tuo Studio accessibile online.

## Integrazione Frontend

Questo repository contiene solo la configurazione backend di Sanity. Per un'implementazione completa del blog, dovrai creare un frontend separato che si connetta a questo backend Sanity utilizzando le API fornite.
