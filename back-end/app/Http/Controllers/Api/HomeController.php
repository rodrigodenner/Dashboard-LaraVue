<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        $clientes = [
          ['id' => 1,
          'name' => 'Rodrigo Denner',
          'email' => 'rodrigo@email.com'
          ],
          ['id' => 2,
          'name' => 'Francisco Denner',
          'email' => 'francisco@email.com'
          ],
          ['id' => 3,
          'name' => 'Joaquim Denner',
          'email' => 'joaquim@email.com'
          ]
        ];

        $products = [
          [
            'id'=> 1,
            'name'=> 'produto 01',
            'valor'=> 19.90,
          ],
          [
            'id'=> 2,
            'name'=> 'produto 02',
            'valor'=> 29.90,
          ],
          [
            'id'=> 3,
            'name'=> 'produto 03',
            'valor'=> 39.90,
          ]
        ];
        return response()->json([
          'clientes' => $clientes,
          'products' => $products,
        ]);
    }
}
