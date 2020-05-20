const {
    addReport, 
    getReportsByAlbumId, 
    getReportById,
   } = require('../services/report');
 const { ServerError } = require('../../config/serverConfig');
 
 module.exports = new class ReportController {
   self = this;
   async addReport(req, res, next) {
     const { err, createdReport, status } = await addReport(req);
     if(err) return next(new ServerError(err, status));
     res.json({ message: 'success!', data: createdReport });
   }
 
   async getReportsByAlbumId(req, res, next) {
     const { err, reports, status } = await getReportsByAlbumId(req.query);
     if(err) return next(new ServerError(err, status));
     res.json({ message: 'success!', data: reports });
   }
 
   async getReportById(req, res, next) {
     const { err, report, status } = await getReportById(req.params.id);
     if(err) return next(new ServerError(err, status));
     res.json({ message: 'success!', data: report });
   }
}
