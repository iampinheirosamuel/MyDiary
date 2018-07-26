import data from '../models/model';

class diary {
  static getEntries(req, res) {
    if (data.length !== 0) {
      return res.status(200).json({
        status: 'success',
        message: 'entries are available',
        data: { data },
      });
    }
    return res.status(200).json({
      status: 'success',
      message: 'no entries available',
      data: { },
    });
  }

  static postEntry(req, res) {
    const today = new Date();
    const entry = {};
    if (typeof req.body.name === 'string' && typeof req.body.content === 'string') {
      entry.title = req.body.name;
      entry.content = req.body.content;
      entry.created_at = today.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
      data.push(entry);
      return res.status(201).json({
        status: 'success',
        message: 'entry added successfully',
        data: { entry },
      });
    }
    return res.status(400).send({
      status: 'fail',
      message: 'entry not added',
      data: {},
    });
  }

  static getEntry(req, res) {
    const entry = data[req.params.entry_id];
    if (entry) {
      return res.status(200).json({
        status: 'success',
        message: 'entry fetched successfully',
        data: { entry },
      });
    }
    return res.status(404).json({
      status: 'fail',
      message: 'entry not found',
      data: {},
    });
  }

  static modifyEntry(req, res) {
    const editEntry = data[req.params.entry_id];
    if (editEntry) {
      editEntry.title = req.body.name;
      editEntry.content = req.body.content;
      return res.status(201).json({
        status: 'success',
        message: 'entry modified successfully',
        data: { editEntry },
      });
    }
    return res.status(404).json({
      status: 'fail',
      message: 'entry not found',
      data: {},
    });
  }

  static deleteEntry(req, res) {
    const entry = data[req.params.entry_id];
    if (entry) {
      data.splice(req.params.entry_id, 1);
      return res.status(200).json({
        status: 'success',
        message: 'entry deleted successfuly',
        data: {},
      });
    }
    return res.status(404).json({
      status: 'fail',
      message: 'entry not found',
      data: {},
    });
  }
}


export default diary;
