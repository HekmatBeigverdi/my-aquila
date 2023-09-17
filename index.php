<?php

/**
 * Main template file
 * 
 * @package Aquila
 */
get_header();
?>

<div class="primary my-5">
    <main id="main" class="site-main" role="main">
        <?php
            if(have_posts()) :
                ?>
                    <div class="container">
                        <?php
                            if (is_home() && !is_front_page()){
                                ?>
                                <header class="mb-5 mt-5">
                                    <h1 class="page-title">
                                        <?php  single_post_title(); ?>
                                    </h1>
                                </header>
                                <div>
                                    <?php
                            }
                                    ?>
                                    <div class="row">
                                        <?php
                                        while (have_posts()) : the_post();
                                            ?>
                                                <div class="col-lg-4 col-md-6">
                                                    <?php get_template_part('template-parts/content') ?>
                                                </div>
                                            <?php
                                        endwhile;
                                        ?>
                                    </div>
                                </div>
                    </div>
                <?php
            else :
                get_template_part('template-parts/content-none');
            endif;
            ?>
            <div class="container">
                <?php aquila_pagination(); ?>
            </div>
            <?php
        ?>
    </main>
</div>
<?php get_footer();