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
}


export default diary;
