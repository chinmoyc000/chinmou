<?php
class ControllerProductBestseller extends Controller {
	public function index() {
	
	
		
		 $this->load->model('checkout/order');
	
		$this->load->language('product/bestseller');

		$this->load->model('catalog/category');

		$this->load->model('catalog/product');

		$this->load->model('tool/image');

		if (isset($this->request->get['search'])) {
			$search = $this->request->get['search'];
		} else {
			$search = '';
		}
		if (isset($this->request->get['country'])) 
		{
			$country = $this->request->get['country'];
		}
		else 
		{
			$country = '';
		}

		if (isset($this->request->get['tag'])) {
			$tag = $this->request->get['tag'];
		} elseif (isset($this->request->get['search'])) {
			$tag = $this->request->get['search'];
		} else {
			$tag = '';
		}

		if (isset($this->request->get['description'])) {
			$description = $this->request->get['description'];
		} else {
			$description = '';
		}

		if (isset($this->request->get['category_id'])) {
			$category_id = $this->request->get['category_id'];
		} else {
			$category_id = 0;
		}

		if (isset($this->request->get['sub_category'])) {
			$sub_category = $this->request->get['sub_category'];
		} else {
			$sub_category = '';
		}

		if (isset($this->request->get['sort'])) {
			$sort = $this->request->get['sort'];
		} else {
			$sort = 'p.sort_order';
		}

		if (isset($this->request->get['order'])) {
			$order = $this->request->get['order'];
		} else {
			$order = 'ASC';
		}

		if (isset($this->request->get['page'])) {
			$page = $this->request->get['page'];
		} else {
			$page = 1;
		}

		if (isset($this->request->get['limit'])) {
			$limit = (int)$this->request->get['limit'];
		} else {
			$limit = $this->config->get($this->config->get('config_theme') . '_product_limit');
		}

		if (isset($this->request->get['search'])) {
			$this->document->setTitle($this->language->get('heading_title') .  ' - ' . $this->request->get['search']);
		} elseif (isset($this->request->get['tag'])) {
			$this->document->setTitle($this->language->get('heading_title') .  ' - ' . $this->language->get('heading_tag') . $this->request->get['tag']);
		} else {
			$this->document->setTitle($this->language->get('heading_title'));
		}

		$data['breadcrumbs'] = array();

		$data['breadcrumbs'][] = array(
			'text' => $this->language->get('text_home'),
			'href' => $this->url->link('common/home')
		);

		$url = '';

		if (isset($this->request->get['search'])) {
			$url .= '&search=' . urlencode(html_entity_decode($this->request->get['search'], ENT_QUOTES, 'UTF-8'));
		}

		if (isset($this->request->get['tag'])) {
			$url .= '&tag=' . urlencode(html_entity_decode($this->request->get['tag'], ENT_QUOTES, 'UTF-8'));
		}

		if (isset($this->request->get['description'])) {
			$url .= '&description=' . $this->request->get['description'];
		}

		if (isset($this->request->get['category_id'])) {
			$url .= '&category_id=' . $this->request->get['category_id'];
		}

		if (isset($this->request->get['sub_category'])) {
			$url .= '&sub_category=' . $this->request->get['sub_category'];
		}

		if (isset($this->request->get['sort'])) {
			$url .= '&sort=' . $this->request->get['sort'];
		}

		if (isset($this->request->get['order'])) {
			$url .= '&order=' . $this->request->get['order'];
		}

		if (isset($this->request->get['page'])) {
			$url .= '&page=' . $this->request->get['page'];
		}

		if (isset($this->request->get['limit'])) {
			$url .= '&limit=' . $this->request->get['limit'];
		}

		$data['breadcrumbs'][] = array(
			'text' => $this->language->get('heading_title'),
			'href' => $this->url->link('product/bestseller', $url)
		);

		if (isset($this->request->get['search'])) {
			$data['heading_title'] = $this->language->get('heading_title') .  ' - ' . $this->request->get['search'];
		} else {
			$data['heading_title'] = $this->language->get('heading_title');
		}

		$data['text_empty'] = $this->language->get('text_empty');
		$data['text_search'] = $this->language->get('text_search');
		$data['text_keyword'] = $this->language->get('text_keyword');
		$data['text_category'] = $this->language->get('text_category');
		$data['text_sub_category'] = $this->language->get('text_sub_category');
		$data['text_quantity'] = $this->language->get('text_quantity');
		$data['text_manufacturer'] = $this->language->get('text_manufacturer');
		$data['text_model'] = $this->language->get('text_model');
		$data['text_price'] = $this->language->get('text_price');
		$data['text_tax'] = $this->language->get('text_tax');
		$data['text_points'] = $this->language->get('text_points');
		$data['text_compare'] = sprintf($this->language->get('text_compare'), (isset($this->session->data['compare']) ? count($this->session->data['compare']) : 0));
		$data['text_sort'] = $this->language->get('text_sort');
		$data['text_limit'] = $this->language->get('text_limit');

		$data['entry_search'] = $this->language->get('entry_search');
		$data['entry_description'] = $this->language->get('entry_description');

		$data['button_search'] = $this->language->get('button_search');
		$data['button_cart'] = $this->language->get('button_cart');
		$data['button_wishlist'] = $this->language->get('button_wishlist');
		$data['button_compare'] = $this->language->get('button_compare');
		$data['button_list'] = $this->language->get('button_list');
		$data['button_grid'] = $this->language->get('button_grid');

		$data['compare'] = $this->url->link('product/compare');

		$this->load->model('catalog/category');

		// 3 Level Category Search
		$data['categories'] = array();

		/*$categories_1 = $this->model_catalog_category->getCategories(0);

		foreach ($categories_1 as $category_1) {
			$level_2_data = array();

			$categories_2 = $this->model_catalog_category->getCategories($category_1['category_id']);

			foreach ($categories_2 as $category_2) {
				$level_3_data = array();

				$categories_3 = $this->model_catalog_category->getCategories($category_2['category_id']);

				foreach ($categories_3 as $category_3) {
					$level_3_data[] = array(
						'category_id' => $category_3['category_id'],
						'name'        => $category_3['name'],
					);
				}

				$level_2_data[] = array(
					'category_id' => $category_2['category_id'],
					'name'        => $category_2['name'],
					'children'    => $level_3_data
				);
			}

			$data['categories'][] = array(
				'category_id' => $category_1['category_id'],
				'name'        => $category_1['name'],
				'children'    => $level_2_data
			);
		}*/

		$data['products'] = array();
		

		if (isset($this->request->get['search']) || isset($this->request->get['tag']) || 1) 
		{
			$filter_data = array(
			   'filter_best_seller'         => "1",
			   'filter_product_country_id' 	=>$country,
				/*'filter_name'         => $search,
				
				
				'filter_tag'          => $tag,
				'filter_description'  => $description,
				'filter_category_id'  => $category_id,
				'filter_sub_category' => $sub_category,*/
				'sort'                => $sort,
				'order'               => $order,
				'start'               => ($page - 1) * $limit,
				'limit'               => $limit
			);

			$product_total = $this->model_catalog_product->getTotalProducts($filter_data);

			$results = $this->model_catalog_product->getProducts($filter_data);

			foreach ($results as $result) 
			{
				if ($result['image'] && file_exists("image/".$result['image'])) 
				{
					//echo $result['image'];
					$image = $this->model_tool_image->resize('./'.$result['image'], $this->config->get($this->config->get('config_theme') . '_image_product_width'), $this->config->get($this->config->get('config_theme') . '_image_product_height'));
				} else {
					$image = $this->model_tool_image->resize('placeholder.png', $this->config->get($this->config->get('config_theme') . '_image_product_width'), $this->config->get($this->config->get('config_theme') . '_image_product_height'));
				}
				
				if(!$image)
				{
					$image = $this->model_tool_image->resize('placeholder.png', $this->config->get($this->config->get('config_theme') . '_image_product_width'), $this->config->get($this->config->get('config_theme') . '_image_product_height'));
			
				}

				if ($this->customer->isLogged() || !$this->config->get('config_customer_price')) {
					$price = $this->currency->format($this->tax->calculate($result['price'], $result['tax_class_id'], $this->config->get('config_tax')), $this->session->data['currency']);
				} else {
					$price = false;
				}

				if ((float)$result['special']) 
				{
					$special = $this->currency->format($this->tax->calculate($result['special'], $result['tax_class_id'], $this->config->get('config_tax')), $this->session->data['currency']);
				} 
				else 
				{
					$special = false;
				}
				 $unit_price_=0;
				if ((float)$result['unit_price']) 
				{
				     $unit_price_ =$this->tax->calculate($result['unit_price'], '','');
					$unit_price = $this->currency->format($this->tax->calculate($result['unit_price'], '',''), $this->session->data['currency']);
				} 
				else
				 {
					$unit_price = false;
				}
				
				
				$promo_unit_price_ =0;
				if ((float)$result['promo_unit_price']) 
				{
				    $promo_unit_price_ =$this->tax->calculate($result['promo_unit_price'], '','');
					$promo_unit_price = $this->currency->format($this->tax->calculate($result['promo_unit_price'], '',''), $this->session->data['currency']);
				} 
				else
				 {
					$promo_unit_price = false;
				}
				
				
				
				$product_options = $this->model_catalog_product->getProductOptions($result['product_id']);
				if ((float) $product_options[0]['product_option_value'][0]['price']) 
				{
					$default_option_price = $this->currency->format($this->tax->calculate( $product_options[0]['product_option_value'][0]['price'], '',''), $this->session->data['currency']);
				} 
				else
				{
					$default_option_price = false;
				}

				if ($this->config->get('config_tax')) {
					$tax = $this->currency->format((float)$result['special'] ? $result['special'] : $result['price'], $this->session->data['currency']);
				} else {
					$tax = false;
				}

				if ($this->config->get('config_review_status')) {
					$rating = (int)$result['rating'];
				} else {
					$rating = false;
				}
				$out_of_stock=0;
				if(!$result['is_in_stock'])
				{
				
    				if($result['quantity'] <= 0) 
    				{
    					$stock_class = "add-cart out-of-stock";
    					$stock_text = "Out Of Stock";
    					$out_of_stock=1;
    				} 
    				elseif ($result['quantity']>0  && $result['quantity'] <= 10) 
    				{
    					$stock_class = "add-cart stock-danger-lebel";
    					$stock_text = "Low Stock";
    				} 
    				else 
    				{
    					$stock_class = "add-cart in-stock";
    					$stock_text = "Add to Cart";
    				}
    				
				}
				else
				{
                    $stock_class = "add-cart in-stock";
                    $stock_text = "Add to Cart";
				}
				
				
				//$product_options = $this->model_catalog_product->getProductOptions($result['product_id']);
				
				$product_flag_size=product_flag_size();
				
				if (count($product_options)>0) 
				{
					$default_option_price = $this->currency->format($this->tax->calculate($product_options[0]['product_option_value'][0]['price'], '',''), $this->session->data['currency']);
				} 
				else
				{
					$default_option_price = false;
				}
				  $discount_percent=0;
					if($promo_unit_price_<$unit_price_)
					{
					   $savings=$unit_price_-$promo_unit_price_;
					   $discount_percent=floor(($savings/$unit_price_)*100);
					}
				
				$data['products'][] = array(
					'product_id'  				=> $result['product_id'],
					"is_offer_active"			=>$product_options[0]['product_option_value'][0]['is_offer_active'],
					'stock_text'  				=>$stock_text,
					'stock_class'  				=>$stock_class,
					'out_of_stock'  			=>$out_of_stock,
					'bc'  						=> $result['bc'],
					'item_no'  					=> $result['item_no'],
					'unit_price'  				=> $unit_price,
					'promo_unit_price'  		=> $promo_unit_price,
					'discount_percent'  		=> $discount_percent,
					'default_option_price'  	=> $default_option_price,
					'c_code'  					=>$result['c_code'],
					'c_country'  				=>$result['c_country'],
					'c_country_image'  	=> $this->model_tool_image->resize($result['c_country_image'], $product_flag_size['width'], $product_flag_size['height']),
					'product_options'  	=> $product_options,
					'thumb'       => $image,
					'name'        => $result['name'],
					'description' => utf8_substr(strip_tags(html_entity_decode($result['description'], ENT_QUOTES, 'UTF-8')), 0, $this->config->get($this->config->get('config_theme') . '_product_description_length')) . '..',
					'price'       => $price,
					'special'     => $special,
					'tax'         => $tax,
					'minimum'     => $result['minimum'] > 0 ? $result['minimum'] : 1,
					'maximum'     => $result['maximum'],
					'rating'      => $result['rating'],
					'href'        => $this->url->link('product/product', 'product_id=' . $result['product_id'] . $url)
				);
			}

			$url = '';

			if (isset($this->request->get['search'])) {
				$url .= '&search=' . urlencode(html_entity_decode($this->request->get['search'], ENT_QUOTES, 'UTF-8'));
			}

			if (isset($this->request->get['tag'])) {
				$url .= '&tag=' . urlencode(html_entity_decode($this->request->get['tag'], ENT_QUOTES, 'UTF-8'));
			}

			if (isset($this->request->get['description'])) {
				$url .= '&description=' . $this->request->get['description'];
			}

			if (isset($this->request->get['category_id'])) {
				$url .= '&category_id=' . $this->request->get['category_id'];
			}

			if (isset($this->request->get['sub_category'])) {
				$url .= '&sub_category=' . $this->request->get['sub_category'];
			}

			if (isset($this->request->get['limit'])) {
				$url .= '&limit=' . $this->request->get['limit'];
			}

			$data['sorts'] = array();

			$data['sorts'][] = array(
				'text'  => $this->language->get('text_default'),
				'value_text' =>'&sort=p.sort_order&order=ASC' . $url,
				'value' => 'p.sort_order-ASC',
				'href'  => $this->url->link('product/bestseller', 'sort=p.sort_order&order=ASC' . $url)
			);

			$data['sorts'][] = array(
				'text'  => $this->language->get('text_name_asc'),
				'value_text' =>'&sort=pd.name&order=ASC' . $url,
				'value' => 'pd.name-ASC',
				'href'  => $this->url->link('product/bestseller', 'sort=pd.name&order=ASC' . $url)
			);

			$data['sorts'][] = array(
				'text'  => $this->language->get('text_name_desc'),
				'value_text' =>'&sort=pd.name&order=DESC' . $url,
				'value' => 'pd.name-DESC',
				'href'  => $this->url->link('product/bestseller', 'sort=pd.name&order=DESC' . $url)
			);

			$data['sorts'][] = array(
				'text'  => $this->language->get('text_price_asc'),
				'value_text' =>'&sort=p.price&order=ASC' . $url,
				'value' => 'p.price-ASC',
				'href'  => $this->url->link('product/bestseller', 'sort=p.price&order=ASC' . $url)
			);

			$data['sorts'][] = array(
				'text'  => $this->language->get('text_price_desc'),
				'value_text' =>'&sort=p.price&order=DESC' . $url,
				'value' => 'p.price-DESC',
				'href'  => $this->url->link('product/bestseller', 'sort=p.price&order=DESC' . $url)
			);

			/*if ($this->config->get('config_review_status')) {
				$data['sorts'][] = array(
					'text'  => $this->language->get('text_rating_desc'),
					'value' => 'rating-DESC',
					'href'  => $this->url->link('product/bestseller', 'sort=rating&order=DESC' . $url)
				);

				$data['sorts'][] = array(
					'text'  => $this->language->get('text_rating_asc'),
					'value' => 'rating-ASC',
					'href'  => $this->url->link('product/bestseller', 'sort=rating&order=ASC' . $url)
				);
			}*/

			/*$data['sorts'][] = array(
				'text'  => $this->language->get('text_model_asc'),
				'value' => 'p.model-ASC',
				'href'  => $this->url->link('product/bestseller', 'sort=p.model&order=ASC' . $url)
			);

			$data['sorts'][] = array(
				'text'  => $this->language->get('text_model_desc'),
				'value' => 'p.model-DESC',
				'href'  => $this->url->link('product/bestseller', 'sort=p.model&order=DESC' . $url)
			);*/
			
			
			//** Country FIlter
			//$this->load->model('catalog/countryproduct');
			$data['countries']=array();
			//$countriesArray = $this->model_catalog_countryproduct->getManufacturersFilter();
			$countriesArray = $this->model_catalog_product->getProductCountry("best_seller");
			foreach ($countriesArray as $countries) 
			{
				
					$data['countries'][] = array(
						'product_country_id' => $countries['product_country_id'],
						'name' => $countries['name'],
						'image' => $this->model_tool_image->resize($countries['image'], 32,32),
						'href' => $this->url->link('product/countryproduct/info', 'product_country_id=' . $countries['product_country_id'])
					);
			}
			
		

			$url = '';

			if (isset($this->request->get['search'])) {
				$url .= '&search=' . urlencode(html_entity_decode($this->request->get['search'], ENT_QUOTES, 'UTF-8'));
			}

			if (isset($this->request->get['tag'])) {
				$url .= '&tag=' . urlencode(html_entity_decode($this->request->get['tag'], ENT_QUOTES, 'UTF-8'));
			}

			if (isset($this->request->get['description'])) {
				$url .= '&description=' . $this->request->get['description'];
			}

			if (isset($this->request->get['category_id'])) {
				$url .= '&category_id=' . $this->request->get['category_id'];
			}

			if (isset($this->request->get['sub_category'])) {
				$url .= '&sub_category=' . $this->request->get['sub_category'];
			}

			if (isset($this->request->get['sort'])) {
				$url .= '&sort=' . $this->request->get['sort'];
			}

			if (isset($this->request->get['order'])) {
				$url .= '&order=' . $this->request->get['order'];
			}

			$data['limits'] = array();

				$limits = array_unique(array($this->config->get($this->config->get('config_theme') . '_product_limit'),30, 60, 90, 120));

			sort($limits);

			foreach($limits as $value) {
				$data['limits'][] = array(
					'text'  => $value,
					'value' => $value,
					'href'  => $this->url->link('product/bestseller', $url . '&limit=' . $value)
				);
			}

			$url = '';

			if (isset($this->request->get['search'])) {
				$url .= '&search=' . urlencode(html_entity_decode($this->request->get['search'], ENT_QUOTES, 'UTF-8'));
			}

			if (isset($this->request->get['tag'])) {
				$url .= '&tag=' . urlencode(html_entity_decode($this->request->get['tag'], ENT_QUOTES, 'UTF-8'));
			}

			if (isset($this->request->get['description'])) {
				$url .= '&description=' . $this->request->get['description'];
			}

			if (isset($this->request->get['category_id'])) {
				$url .= '&category_id=' . $this->request->get['category_id'];
			}

			if (isset($this->request->get['sub_category'])) {
				$url .= '&sub_category=' . $this->request->get['sub_category'];
			}

			if (isset($this->request->get['sort'])) {
				$url .= '&sort=' . $this->request->get['sort'];
			}

			if (isset($this->request->get['order'])) {
				$url .= '&order=' . $this->request->get['order'];
			}

			if (isset($this->request->get['limit'])) {
				$url .= '&limit=' . $this->request->get['limit'];
			}
			if(isset($this->request->get['country'])) 
			{
				$url .= '&country=' . $this->request->get['country'];
			}

			$pagination = new Pagination();
			$pagination->total = $product_total;
			$pagination->page = $page;
			$pagination->limit = $limit;
			$pagination->url = $this->url->link('product/bestseller', $url . '&page={page}');

			$data['pagination'] = $pagination->render();

			$data['results'] = sprintf($this->language->get('text_pagination'), ($product_total) ? (($page - 1) * $limit) + 1 : 0, ((($page - 1) * $limit) > ($product_total - $limit)) ? $product_total : ((($page - 1) * $limit) + $limit), $product_total, ceil($product_total / $limit));

			// http://googlewebmastercentral.blogspot.com/2011/09/pagination-with-relnext-and-relprev.html
			if ($page == 1) {
			    $this->document->addLink($this->url->link('product/bestseller', '', true), 'canonical');
			} elseif ($page == 2) {
			    $this->document->addLink($this->url->link('product/bestseller', '', true), 'prev');
			} else {
			    $this->document->addLink($this->url->link('product/bestseller', $url . '&page='. ($page - 1), true), 'prev');
			}

			if ($limit && ceil($product_total / $limit) > $page) {
			    $this->document->addLink($this->url->link('product/bestseller', $url . '&page='. ($page + 1), true), 'next');
			}

			if (isset($this->request->get['search']) && $this->config->get('config_customer_search')) {
				$this->load->model('account/search');

				if ($this->customer->isLogged()) {
					$customer_id = $this->customer->getId();
				} else {
					$customer_id = 0;
				}

				if (isset($this->request->server['REMOTE_ADDR'])) {
					$ip = $this->request->server['REMOTE_ADDR'];
				} else {
					$ip = '';
				}

				$search_data = array(
					'keyword'       => $search,
					'category_id'   => $category_id,
					'sub_category'  => $sub_category,
					'description'   => $description,
					'products'      => $product_total,
					'customer_id'   => $customer_id,
					'ip'            => $ip
				);

				$this->model_account_search->addSearch($search_data);
			}
		}

		$data['search'] = $search;
		$data['description'] = $description;
		$data['category_id'] = $category_id;
		$data['sub_category'] = $sub_category;

		$data['sort'] = $sort;
		$data['order'] = $order;
		$data['limit'] = $limit;

		$data['column_left'] = $this->load->controller('common/column_left');
		$data['column_right'] = $this->load->controller('common/column_right');
		$data['content_top'] = $this->load->controller('common/content_top');
		$data['content_bottom'] = $this->load->controller('common/content_bottom');
		$data['footer'] = $this->load->controller('common/footer');
		$data['header'] = $this->load->controller('common/header');
		$data['country']=$country;
		$data['register'] = $this->url->link('account/register', '', true);
		$data['login'] = $this->url->link('account/login', '', true);
		$data['logged'] = $this->customer->isLogged();
		
		    $cart_product_ids_array=array();
			//$cart_product_array=$this->cart->getProducts();
			$cart_product_array=$this->cart->getCartItemProductIds();
			if(count($cart_product_array)>0)
			{
				foreach($cart_product_array as $row)
				{
					$cart_product_ids_array[]=$row['product_id'];
				}
			}
			//echo "<pre>".print_r($cart_product_ids_array,1)."</pre>";
			$data['cart_product_ids_array']=$cart_product_ids_array;
			
			//$this->load->model('account/wishlist');
			$wishlist_product_ids_array=array();
			/*$wishlist_product_array = $this->model_account_wishlist->getWishlist();
			if(count($wishlist_product_array)>0)
			{
				foreach($wishlist_product_array as $row)
				{
					$wishlist_product_ids_array[]=$row['product_id'];
				}
			}*/
			$data['wishlist_product_ids_array']=$wishlist_product_ids_array;
			
			
			
			
			
			if (isset($this->request->get['country'])) 
			{
				$country_id=$this->request->get['country'];
				$data['country'] = $country_id;
			}
			else
			{
				$data['country'] = "";
			}
			
			
			

		$this->response->setOutput($this->load->view('product/bestseller', $data));
	}
}
