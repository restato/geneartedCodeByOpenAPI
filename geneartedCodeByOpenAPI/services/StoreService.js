/* eslint-disable no-unused-vars */
const Service = require('./Service');

class StoreService {

  /**
   * Delete purchase order by ID
   * For valid response try integer IDs with positive integer value.         Negative or non-integer values will generate API errors
   *
   * orderId Long ID of the order that needs to be deleted
   * no response value expected for this operation
   **/
  static deleteOrder({ orderId }) {
    return new Promise(
      async (resolve) => {
        try {
          resolve(Service.successResponse(''));
        } catch (e) {
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    );
  }

  /**
   * Returns pet inventories by status
   * Returns a map of status codes to quantities
   *
   * returns Map
   **/
  static getInventory() {
    return new Promise(
      async (resolve) => {
        try {
          resolve(Service.successResponse(''));
        } catch (e) {
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    );
  }

  /**
   * Find purchase order by ID
   * For valid response try integer IDs with value >= 1 and <= 10.         Other values will generated exceptions
   *
   * orderId Long ID of pet that needs to be fetched
   * returns inline_response_200_2
   **/
  static getOrderById({ orderId }) {
    return new Promise(
      async (resolve) => {
        try {
          resolve(Service.successResponse(''));
        } catch (e) {
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    );
  }

  /**
   * Place an order for a pet
   *
   * body InlineObject2 
   * returns inline_response_200_2
   **/
  static placeOrder({ body }) {
    return new Promise(
      async (resolve) => {
        try {
          resolve(Service.successResponse(''));
        } catch (e) {
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    );
  }

}

module.exports = StoreService;
