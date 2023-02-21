import saleRepository from "../repositories/sale.repository.js";
import clientRepository from "../repositories/client.repository.js";
import productRepository from "../repositories/product.repository.js";

const saleService = {
  createSaleService: async function (sale) {
    if (!(await productRepository.getProductRepository(sale.product_id))) {
      throw new Error("Product not exists");
    }

    if (!(await clientRepository.getClientRepository(sale.client_id))) {
      throw new Error("Client not exists");
    }

    return await saleRepository.createSaleRepository(sale);
  },

  getSalesService: async function () {
    return await saleRepository.getSalesRepository();
  },

  getSaleService: async function (id) {
    return await saleRepository.getSaleRepository(id);
  },
  deleteSaleService: async function (id) {
    await saleRepository.deleteSaleRepository(id);
  },
  updateSaleService: async function (sale) {
    if (!(await productRepository.getProductRepository(sale.product_id))) {
      throw new Error("Product not exists");
    }

    if (!(await clientRepository.getClientRepository(sale.client_id))) {
      throw new Error("Client not exists");
    }
    return await saleRepository.updateSaleRepository(sale);
  },
};

export default saleService;
