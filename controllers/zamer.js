import {lodzi, lodziExtensive, heroes, filters} from '../models/model.js';

class Zamer{

    test(req, res) {
          res.send(true);
     }


     async getHeroes(req, res) {
          try {
               const data = await heroes.find();

               res.json(data);
          }
          catch(err) {
               console.error(err);
               res.status(500).json({ message: 'Internal server error' });
          }
     }

     async getFilters(req, res) {
          try {
               const data = await filters.find();

               res.json(data);
          }
          catch(err) {
               console.error(err);
               res.status(500).json({ message: 'Internal server error' });
          }
     }
     
     async deleteHero(req, res) {
          try {
               const id = req.query.id;

               await heroes.deleteOne({
                    _id: id
               })

               res.status(200).json({ message: 'Hero successfully deleted' });
               
          }
          catch(err) {
               console.error(123);
               console.error(err);
               res.status(500).json({ message: 'Internal server error' });
          }
     }

     async addHero(req, res) {
          try {
               const {name, description, element, uri} = req.body;

               const postHero = new heroes({
                    name: name,
                    description: description,
                    element: element,
                    uri: uri
               })

               const {_id} = await postHero.save();

               console.log(_id);

               res.status(201).json({
                    message: 'Успех',
                    _id: _id
               });
               
               
          }
          catch(err) {
               console.error(err);
               res.status(500).json({ message: 'Internal server error' });
          }
     }


     async mongopost(req, res) {
          try {
               const {name, tel} = req.body;

               const isNotNewEl = await lodzi.findOne({
                    tel: tel
               })
               if (isNotNewEl) {
                    res.status(409).json({
                         message: 'Уже имеется'
                    })
                    return;
               }

               const postzamer = new lodzi({
                    name: name,
                    tel: tel
               })

               await postzamer.save();
               res.status(201).json({
                    message: 'Успех'
               });
          
          }
          catch(e) {
               console.log(e, 'ЗАМЕРА не будет');
          }
     }
     async mongopostExtensive(req, res) {
          try {
               const {name, tel, type, width, height, glass, glass2} = req.body;

               const isNotNewEl = await lodziExtensive.findOne({
                    tel: tel
               })
               if (isNotNewEl) {
                    res.status(409).json({
                         message: 'Уже имеется'
                    })
                    return;
               }

               const postzamer = new lodziExtensive({
                    name: name,
                    tel: tel,
                    type: type,
                    width: width,
                    height: height,
                    glass: glass,
                    glass2: glass2,
               })

               await postzamer.save(); 
               res.status(201).json({
                    message: 'Успех'
               });
          
          }
          catch(e) {
               console.log(e, 'ЗАМЕРА не будет');
          }
     }
}
export default new Zamer();