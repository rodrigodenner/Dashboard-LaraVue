<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Cliente;
use App\Models\Product;
use Illuminate\Http\Request;

class HomeController extends Controller
{

    public function index(Cliente $cliente, Product $product)
    {
        $clientes = $cliente->all();
        $products = $product->all();
        return response()->json([
          'clientes' => $clientes,
          'products' => $products,
        ]);
    }
}
