import data from '../models/model';

class diary {
  static getEntries(req, res) {
    if (data.length !== 0) {
      return res.status(200).json({
        SUCCESS: { data },
      });
    }
    return res.status(200).json({
      SUCCESS: {
        response: 'No entries available',
        requestedTime: Date.now(),
      },
    });
  }

  static postEntry(req, res) {
    const today = new Date();
    const entry = {};
    if (typeof req.body.name === 'string' && typeof req.body.content === 'string') {
      entry.title = req.body.title;
      entry.content = req.body.content;
      entry.created_at = today.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
      data.push(entry);
      return res.status(201).json({
        SUCCESS: { response: 'entry added successfully' },
      });
    }
    return res.status(400).send({
      FAILED: { response: 'entry can not be added', requestedTime: Date.now() },
    });
  }

  // static getEntry(req, res) {
  //   const entry = data[req.params.entry_id];
  //   if (entry.length === 0) {
  //     return res.status(404).json({
  //       FAILED: { response: 'entry not found', requestedTime: Date.now() },
  //     });
  //   }
  //   return res.status(200).json({
  //     SUCCESS: { SUCCESS: entry },
  //   });
  // }
}


export default diary;
