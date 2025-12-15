---
business: BNP Paribas Asset Management (Xebia)
---

## Lead Technique Front-end - Plateforme de Trading Obligataire Temps Réel

### Contexte & Enjeux

BNP Paribas Asset Management (**€600Md d'actifs sous gestion**), engage la digitalisation du **marché obligataire** (bonds), historiquement traité de gré à gré et peu transparent. **Opportunité réglementaire (MiFID II) :** exploiter la transparence imposée pour développer une **plateforme de trading électronique moderne**, offrant analyse temps réel et exécution rapide aux traders obligataires.

### Réalisations & Impact

**⭐ Lead technique & architecture front-end :** conception de l'architecture applicative et pilotage technique du développement au sein d'une **équipe de 4 développeurs** en méthodologie Kanban | Revues de code et mentoring technique

**Dashboards temps réel d'analyse de marché :** développement de composants interactifs de visualisation de données financières : courbes de taux en temps réel, carnets d'ordres (order books), historiques de prix, spreads obligataires | Intégration de **Highcharts** (graphiques financiers), **ag-Grid** (grilles de données haute performance avec 10K+ lignes), **DevExtreme** (composants avancés)

**Architecture Redux pour la cohérence temps réel :** state management centralisé via **Redux** pour synchroniser les données market data en temps réel sur **6 écrans simultanés** | Gestion des flux WebSocket pour les mises à jour live | Performance optimisée avec memoization et virtual scrolling

**Évangélisation & partage de connaissances :** animation de **Katas techniques** (clean code, design patterns) et **Brown Bag Lunches** pour diffuser les bonnes pratiques Angular et Redux à l'échelle de l'organisation BNP AM

**Impact métier :** plateforme utilisée par **50+ traders** pour analyser et exécuter des transactions obligataires | Support de **€2Md+ de volume de trading mensuel**

**Stack :** Angular 7, Redux (@ngrx/store), Highcharts, ag-Grid, DevExtreme, WebSocket, RxJS
